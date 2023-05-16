import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, waitFor} from '@testing-library/react';
import { useGetCharactersQuery, useGetCharacterByIdQuery } from './charactersApi';

// Mock server setup using MSW
const server = setupServer(
    rest.post('https://rickandmortyapi.com/graphql', async (req, res, ctx) => {
        // Mock response for getCharacters endpoint
        const request = await req.json()

        console.log(request);
        console.log(req);


        if (request.body.query().includes('characters')) {
            return res(
                ctx.json({
                    data: {
                        characters: {
                            info: {
                                pages: 3,
                                next: 2,
                            },
                            results: [
                                {
                                    id: 1,
                                    name: 'Rick',
                                    image: 'rick.png',
                                    status: 'Alive',
                                    species: 'Human',
                                    gender: 'Male',
                                },
                                {
                                    id: 2,
                                    name: 'Morty',
                                    image: 'morty.png',
                                    status: 'Alive',
                                    species: 'Human',
                                    gender: 'Male',
                                },
                            ],
                        },
                    },
                })
            );
        }
        // Mock response for getCharacterById endpoint
        else if (request.body.query().includes('character')) {
            return res(
                ctx.json({
                    data: {
                        character: {
                            id: 1,
                            name: 'Rick',
                            image: 'rick.png',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Male',
                            type: 'Main',
                            origin: {
                                name: 'Earth',
                            },
                            location: {
                                name: 'Dimension C-137',
                            },
                            episode: [
                                {
                                    id: 1,
                                    name: 'Pilot',
                                    air_date: 'December 2, 2013',
                                    episode: 'S01E01',
                                },
                            ],
                        },
                    },
                })
            );
        }
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Character API', () => {
    describe('useGetCharactersQuery', () => {
                test('should fetch characters and return data', async () => {
            const { result } = renderHook(() =>
                useGetCharactersQuery({ name: '', gender: '', status: '', page: 1 })
            );

            await waitFor(() => result.current.isSuccess);

            expect(result.current.data).toEqual({
                info: {
                    pages: 3,
                    next: 2,
                },
                results: [
                    {
                        id: 1,
                        name: 'Rick',
                        image: 'rick.png',
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Male',
                    },
                    {
                        id: 2,
                        name: 'Morty',
                        image: 'morty.png',
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Male',
                    },
                ],
            });
            expect(result.current.isLoading).toBe(false);
            expect(result.current.isError).toBe(false);
        });

        // Add more test cases for different scenarios (e.g., loading state, error handling)
    });

    describe('useGetCharacterByIdQuery', () => {
        test('should fetch character by ID and return data', async () => {
            const { result } = renderHook(() =>
                useGetCharacterByIdQuery(1)
            );

            await waitFor(() => result.current.isSuccess);

            expect(result.current.data).toEqual({
                id: 1,
                name: 'Rick',
                image: 'rick.png',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                type: 'Main',
                origin: {
                name: 'Earth',
            },
            location: {
                name: 'Dimension C-137',
            },
            episode: [
                {
                    id: 1,
                    name: 'Pilot',
                    air_date: 'December 2, 2013',
                    episode: 'S01E01',
                },
            ],
        });
            expect(result.current.isLoading).toBe(false);
            expect(result.current.isError).toBe(false);
        });
    });
});