import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Admin from "../Admin";
import { MemoryRouter } from "react-router-dom";
import ServicesContext from "../ServicesContext";
import { mockServices, mockSetServices } from "./setupTests";

describe("Admin", () => {
    it('Renders the Navigation Bar', async () => {
        render(
            <MemoryRouter>
                <ServicesContext value={{services : mockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        );
        expect(await screen.findByTestId("NavigationBarDiv")).toBeInTheDocument()
        expect(await screen.findByText("Special Request")).toBeInTheDocument()
    })
})