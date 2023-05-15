import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";
import {CharacterCard} from "./CharacterCard";
import {test, expect, describe} from "vitest";

const renderComponent = () => {
    const characterId = 15;
    const imageUrl = "https://example.com/image.png";
    const name = "Rick";
    const status = "Alive";
    const gender = "Male";
    const species = "Human";

    render(
        <Router>
            <CharacterCard
                id={characterId}
                imageUrl={imageUrl}
                name={name}
                status={status}
                gender={gender}
                species={species}
            />
        </Router>
    );
    return {
        name,
        status,
        gender,
        species
    };
};
describe("Character card component", () => {

    test("renders the component with correct content", async () => {
        const {
            name,
            status,
            gender,
            species
        } = renderComponent();

        // Assert that the component is rendered
        expect(screen.getByRole("heading", {name})).toBeInTheDocument();
        expect(screen.getByText(`Status: ${status}`)).toBeInTheDocument();
        expect(screen.getByText(`Gender: ${gender}`)).toBeInTheDocument();
        expect(screen.getByText(`Species: ${species}`)).toBeInTheDocument();
    });

    test("clicking the button navigates to the character page with the correct ID in the URL", async () => {
        const characterId = 15;
        // const historyMock = {push: vi.fn()};
        const user = userEvent.setup();

        renderComponent();

        const btn = screen.getByRole("link", {name: /explore/i});

        await user.click(btn);
        expect(btn).toBeInTheDocument();
        expect(window.location.pathname).toBe(`/character/${characterId}`);
    });
});
