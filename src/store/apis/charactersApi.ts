import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://rickandmortyapi.com/graphql";

interface BasicCharacter {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

interface Episode {
    id: number;
    name: number;
    air_date: string;
    episode: string;
}

interface CompleteCharacter extends BasicCharacter {
    type: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    episode: Episode[];
}

interface Characters {
    info: {
        pages: number;
        next: number | null;
    };
    results: BasicCharacter[];
}

type ReturnCharacters = {
    data: {
        characters: Characters
    };
}

type ReturnCharacterById = {
    data: {
        character: CompleteCharacter;
    };
}

type GetCharacterParams = {
    name: string;
    gender: string;
    status: string;
    page: number;
};

// Define your API using createApi
const characterApi = createApi({
    reducerPath: "rickAndMortyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<Characters, GetCharacterParams>({
            query: (params) => {
                return {
                    url: "",
                    method: "POST",
                    body: {
                        query: `
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
                    },
                };
            },
            transformResponse: (response: ReturnCharacters) => {
                return response.data.characters;
            },
        }),
        getCharacterById: builder.query<CompleteCharacter, number>({
            query: (id) => {
                return {
                    url: "",
                    method: "POST",
                    body: {
                        query: `
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
                    },
                };
            },
            transformResponse: (response: ReturnCharacterById) => {
                return response.data.character;
            },
        }),
    }),
});

export default characterApi;
export const {useGetCharactersQuery, useGetCharacterByIdQuery} = characterApi;
