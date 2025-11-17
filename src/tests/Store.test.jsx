import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Store from "../Store";
import ServicesContext from "../ServicesContext";

describe("Store Page", () => {
    it('Renders a Search Bar', () => {
        const mockServices = [
            {
                "id": "67",
                "job": "Janitor",
                "description": "Janitor Description",
                "hourlyrate": "20",
                "customerrating": "4.2"
            },
            {
                "id": "69",
                "job": "Astronaut",
                "description": "Astronaut Description",
                "hourlyrate": "100",
                "customerrating": "1.9"
            }
        ]
        render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices}}>
                    <Store/>
                </ServicesContext>
            </MemoryRouter>
        );
        expect(screen.getByTestId("ServiceSearchBar")).toBeInTheDocument()
    })
})