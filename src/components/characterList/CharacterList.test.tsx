import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import {describe, expect, test, vi} from "vitest";
import createServer from "../../test-utils/createServer";
import {CharacterList} from "./CharacterList";
import {getObserverOf} from "../../../setupTests";

createServer();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom") as any;
    return {
        ...actual,
        useLoaderData: vi.fn(),
    };
});

describe("CharacterList", () => {
    test("should render search bar and filters", () => {
        const {container} = render(
            <Provider store={store}>
                <CharacterList/>
            </Provider>
        );

        getObserverOf(container)

        // Assert that the search bar is rendered
        expect(screen.getByRole("textbox", {name: "Search"})).toBeInTheDocument();

        // Assert that the filters are rendered
        expect(screen.getByLabelText("Status")).toBeInTheDocument();
        expect(screen.getByLabelText("Gender")).toBeInTheDocument();
    });

    // it("should show skeleton while data is being fetched", () => {
    //     render(<CharacterList/>);
    //
    //     // Assert that the skeleton is rendered
    //     expect(screen.getByTestId("character-card-skeleton")).toBeInTheDocument();
    // });
    //
    // it("should render character cards when data is successfully fetched", async () => {
    //     // Mock the API response
    //     const mockData = [
    //         {
    //             id: 1,
    //             name: "Character 1",
    //             image: "image1.jpg",
    //             gender: "Male",
    //             species: "Human",
    //             status: "Alive",
    //         },
    //         // Add more mock data as needed
    //     ];
    //     jest.spyOn(global, "fetch").mockResolvedValueOnce({
    //         json: async () => ({
    //             info: {next: null},
    //             results: mockData,
    //         }),
    //     });
    //
    //     render(<CharacterList/>);
    //
    //     // Wait for the data to be fetched and the character cards to be rendered
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId("character-card")).toHaveLength(mockData.length);
    //     });
    // });
    //
    // it("should display error message when data fails to load", async () => {
    //     // Mock the API response with an error
    //     jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Failed to fetch data"));
    //
    //     render(<CharacterList/>);
    //
    //     // Wait for the error message to be displayed
    //     await waitFor(() => {
    //         expect(screen.getByText("Something gone wrong field to load characters")).toBeInTheDocument();
    //     });
    // });
    //
    // // Add more test cases for the infinite scroll logic if needed

});
