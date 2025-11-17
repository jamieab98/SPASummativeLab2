import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Store from "../Store";
import ServicesContext from "../ServicesContext";
import { mockServices, mockSetServices } from "./setupTests";

describe("Store Page", () => {
    it('Renders information about jobs', () => {
        render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices}}>
                    <Store/>
                </ServicesContext>
            </MemoryRouter>
        );
        expect(screen.getByTestId("ServiceSearchBar")).toBeInTheDocument()
        expect(screen.getByText("Service: Janitor")).toBeInTheDocument()
        expect(screen.getByText("Hourly Rate: $100")).toBeInTheDocument()
    })
    it('Renders the Navigation Bar', () => {
        render(
            <MemoryRouter>
                <ServicesContext value={{services : mockServices}}>
                    <Store />
                </ServicesContext>
            </MemoryRouter>
        );
        expect(screen.getByTestId("NavigationBarDiv")).toBeInTheDocument()
        expect(screen.getByText("Special Request")).toBeInTheDocument()
    })
})