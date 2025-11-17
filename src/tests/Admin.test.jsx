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
    it('Renders a list of services', async () => {
        render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        );
        expect(await screen.findByText("Janitor")).toBeInTheDocument()
        expect(await screen.findByText("Astronaut")).toBeInTheDocument()
    })
    it('Renders the inputs and buttons for the admin to use', async () => {
        render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        );
        expect(await screen.findByLabelText("Service to Change")).toBeInTheDocument()
        expect(await screen.findByLabelText("Update Price")).toBeInTheDocument()
        expect(await screen.findByLabelText("Update Customer Rating")).toBeInTheDocument()
        expect(await screen.findByText("Submit Changes")).toBeInTheDocument()
        expect(await screen.findByText("Delete Service")).toBeInTheDocument()
    })
})