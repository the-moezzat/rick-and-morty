import { createApi } from '@reduxjs/toolkit/query/react'
import { request, gql, ClientError } from 'graphql-request'
import {Characters, CompleteCharacter} from "../../types/characterTypes";

const BASE_URL = "https://rickandmortyapi.com/graphql";

type GetCharacterParams = {
    name: string;
    gender: string;
    status: string;
    page: number;
};

const graphqlBaseQuery = ({ baseUrl }: { baseUrl: string }) =>
    async ({ body }: { body: string }) => {
        try {
            const result = await request(baseUrl, body)
            return { data: result }
        } catch (error) {
            if (error instanceof ClientError) {
                return { error: { status: error.response.status, data: error } }
            }
            return { error: { status: 500, data: error } }
        }
    }

export const characterApi = createApi({
    reducerPath: "rickAndMortyApi",
    baseQuery: graphqlBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<Characters, GetCharacterParams>({
            query: (params) => ({
                body: gql`
            {
              characters(page: ${params.page} , filter:{name: "${params.name}",  status: "${params.status}", gender: "${params.gender}"}) {
                info{
                  pages
                  next
                }
                results{
                  id
                  image
                  name
                  species
                  gender
                  status
                }
              }
            }`,
            }),
            transformResponse: (response: { characters: Characters }) => {
                return response.characters;
            },
        }),
        getCharacterById: builder.query<CompleteCharacter, number>({
            query: (id) => ({
                body: gql`
            {
              character(id: ${id}) {
                id
                name
                image
                status
                species
                gender
                type
                origin {
                  name
                }
                location {
                  name
                }
                episode  {
                  id
                  name
                  air_date
                  episode
                }
              }
            }`,
            }),
            transformResponse: (response: { character: CompleteCharacter }) => {
                return response.character;
            },
        }),
    }),
})

export default characterApi;
export const {useGetCharactersQuery, useGetCharacterByIdQuery} = characterApi;