import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import { expect, it } from "vitest";

describe("Home Page", () => {
    it('Renders the the title', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
            );
        expect(screen.getByText("My Service Shop!")).toBeInTheDocument();
    })
})