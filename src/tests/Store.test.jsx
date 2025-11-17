import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Store from "../Store";
import ServicesContext from "../ServicesContext";

test('Renders Service Names', () => {
    const mockData = [
        {
            id: "200",
            job: "Plumber",
            description: "Plumber Description",
            hourlyrate: "10",
            customerrating: "4"
        },
        {
            id: "201",
            job: "Cop",
            description: "Cop Description",
            hourlyrate: "20",
            customerrating: "3"
        }
    ];
    render(
        <ServicesContext.Provider value={{services: mockData, setServices: () => {} }}>
            <Store />
        </ServicesContext.Provider>
    )
})