import {rest} from "msw";
import {setupServer} from "msw/node";

export default function createServer() {
    const server = setupServer(
        rest.post("https://rickandmortyapi.com/graphql", async (req, res, ctx) => {
            const request = await req.json();

            if (request.query.includes('characters')) {
                return res(
                    ctx.json({
                        data: {
                            characters: {
                                info: {
                                    pages: 1,
                                    next: 2,
                                },
                                results: [
                                    {
                                        id: "1",
                                        name: "Rick Sanchez",
                                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                                        species: "Human",
                                        gender: "Male",
                                        status: "Alive",
                                    },
                                ],
                            },
                        },
                    })
                );
            }

            if (request.query.includes('character')) {
                return res(
                    ctx.json({
                        data: {
                            character: {
                                id: "1",
                                name: "Rick Sanchez",
                                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                                species: "Human",
                                gender: "Male",
                                status: "Alive",
                                origin: {
                                    name: "Earth (C-137)"
                                },
                                location: {
                                    name: "Earth (Replacement Dimension)"
                                },
                                episode: [{
                                    id:  "1",
                                    name: "Pilot",
                                    air_date: "December 2, 2013",
                                    episode: "S01E01",
                                }],
                                type: "unknown",
                            }
                        }
                    })
                )
            }
        })
    );
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
}