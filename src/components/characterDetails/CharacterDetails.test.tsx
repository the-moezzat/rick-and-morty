import {render, screen} from "@testing-library/react";
import {MemoryRouter, useLoaderData} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../store";
import {describe, expect, test, vi} from "vitest";
import {CharacterDetails} from "./CharacterDetails";
import createServer from "../../test-utils/createServer";

createServer();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom") as any;
    return {
        ...actual,
        useLoaderData: vi.fn(),
    };
});

describe("CharacterDetails loading and success", () => {
    test("renders loading skeleton when data is fetching", () => {
        useLoaderData.mockReturnValue({id: 1});

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CharacterDetails/>
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByLabelText("character-details-skeleton")).toBeInTheDocument();
    });


    test("renders character details when data is available", async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useLoaderData.mockReturnValue({id: 1});
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CharacterDetails/>
                </Provider>
            </MemoryRouter>
        );

        const character = {
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
                id: "1",
                name: "Pilot",
                air_date: "December 2, 2013",
                episode: "S01E01",
            }],
            type: "unknown",
        };

        expect(await screen.findByRole("heading", {
            name: /Rick Sanchez/i
        })).toBeInTheDocument();
        expect(await screen.findByText(character.status)).toBeInTheDocument();
        expect(await screen.findByRole("img")).toHaveAttribute("src", "https://rickandmortyapi.com/api/character/avatar/1.jpeg");
        expect(await screen.findByText(character.gender)).toBeInTheDocument();
        expect(await screen.findByText(character.origin.name)).toBeInTheDocument();
        expect(await screen.findByText(character.location.name)).toBeInTheDocument();
        expect(await screen.findByText(character.species)).toBeInTheDocument();
        expect(await screen.findByText(character.type)).toBeInTheDocument();
        expect(await screen.findByText(character.episode[0].episode)).toBeInTheDocument();
    });
});

// describe("CharacterDetails error messages", () => {
//     test("renders error message when there is an error", () => {
//         vi.mock("../../store");
//         useLoaderData.mockReturnValue({id: 1});
//         useGetCharacterByIdQuery.mockReturnValue({
//             data: null,
//             isFetching: false,
//             error: "Error message",
//         });
//         //
//         render(<CharacterDetails/>);
//
//         expect(screen.getByText("Something went wrong while trying to load character")).toBeInTheDocument();
//     });
//
//     test("renders 'Character not found' message when data is null", () => {
//         vi.mock("../../store", async () => {
//             const actual = await vi.importActual("../../store");
//             return {
//                 ...actual,
//                 useGetCharacterByIdQuery: vi.fn(),
//             };
//         });
//         useLoaderData.mockReturnValue({id: 1});
//
//         useGetCharacterByIdQuery.mockReturnValue({
//             data: null,
//             isFetching: false,
//             error: null,
//         });
//
//         render(<CharacterDetails/>);
//
//         expect(screen.getByText("Character \"1\" not found")).toBeInTheDocument();
//     });
// });