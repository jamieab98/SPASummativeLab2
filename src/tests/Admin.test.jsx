import { screen, render, waitFor } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import Admin from "../Admin";
import { MemoryRouter } from "react-router-dom";
import ServicesContext from "../ServicesContext";
import { mockServices, mockSetServices, mockUpdatedService, mockUpdateFetch } from "./setupTests";
import userEvent from "@testing-library/user-event";

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
    it('Deletes a service when delete button is pressed', async () => {
        const user = userEvent.setup();
        const {rerender} = render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        )
        const deleteButton = await screen.findByText("Delete Service")
        const janitorItem = await screen.findByText("Janitor")
        await user.click(janitorItem)
        await user.click(deleteButton);
        const udpatedMockServices = mockServices.filter(s=>s.job !== "Janitor")
        rerender(
            <MemoryRouter>
                <ServicesContext value={{ services: udpatedMockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        )
        await waitFor(()=> {
            expect(screen.queryByText("Janitor")).not.toBeInTheDocument()
        })
    })
    it('Modifies a service', async () => {
        const user = userEvent.setup()
        global.fetch = vi.fn(() => 
            Promise.resolve({
                json: () => Promise.resolve(mockUpdatedService)
            })
        );

        render(
            <MemoryRouter>
                <ServicesContext value={{services: mockServices, setServices: mockSetServices}}>
                    <Admin />
                </ServicesContext>
            </MemoryRouter>
        );
        const changeButton = await screen.findByText("Submit Changes")
        await user.click(screen.getByText("Astronaut"))
        await user.type(screen.getByLabelText("Update Price"), "500")
        await user.type(screen.getByLabelText("Update Customer Rating"), "3.3")
        await user.click(changeButton)
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining("/jobs/69"),
            expect.objectContaining({
                method: "PATCH",
                headers: expect.any(Object),
                body: expect.any(String),
            })
        )
        const body= JSON.parse(fetch.mock.calls[1][1].body);
        expect (body.hourlyrate).toBe("500")
        expect (body.customerrating).toBe("3.3")
    })
})