import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Store from "../Store";
import ServicesContext from "../ServicesContext";
import { mockServices, mockSetServices } from "./setupTests";

describe("Store Page", () => {
  it("Renders information about jobs", () => {
    render(
      <MemoryRouter>
        <ServicesContext value={{ services: mockServices, setServices: mockSetServices }}>
          <Store />
        </ServicesContext>
      </MemoryRouter>
    );
    expect(screen.getByTestId("ServiceSearchBar")).toBeInTheDocument();
    expect(screen.getByText("Janitor")).toBeInTheDocument();
    expect(screen.getByText("Hourly Rate: $100")).toBeInTheDocument();
  });

  it("Renders the Navigation Bar", () => {
    render(
      <MemoryRouter>
        <ServicesContext value={{ services: mockServices, setServices: mockSetServices }}>
          <Store />
        </ServicesContext>
      </MemoryRouter>
    );
    expect(screen.getByTestId("NavigationBarDiv")).toBeInTheDocument();
    expect(screen.getByText("Special Request")).toBeInTheDocument();
  });

  it("Renders Service Names from inline mock data", () => {
    const mockData = [
      {
        id: "200",
        job: "Plumber",
        description: "Plumber Description",
        hourlyrate: "10",
        customerrating: "4",
      },
      {
        id: "201",
        job: "Cop",
        description: "Cop Description",
        hourlyrate: "20",
        customerrating: "3",
      },
    ];
    render(
      <MemoryRouter>
        <ServicesContext value={{ services: mockData, setServices: () => {} }}>
          <Store />
        </ServicesContext>
      </MemoryRouter>
    );
    expect(screen.getByText("Plumber")).toBeInTheDocument();
    expect(screen.getByText("Cop")).toBeInTheDocument();
  });
});