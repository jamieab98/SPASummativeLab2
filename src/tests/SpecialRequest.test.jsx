import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SpecialRequest from "../SpecialRequest"
import { MemoryRouter } from "react-router-dom";
import { mockSetServices, mockServices, mockFetch } from "./setupTests";
import userEvent from "@testing-library/user-event";


describe('Special Request', () => {
    it('Shows 2 text fields, 1 number field, and 1 submit button', () => {
        render(
            <MemoryRouter>
                <SpecialRequest />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("Job:")).toBeInTheDocument()
        expect(screen.getByLabelText("Description:")).toBeInTheDocument()
        expect(screen.getByLabelText("Hourly Rate Suggestion:")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
    it('Updates list of services after clicking request job', async () => {
        render(
            <MemoryRouter>
                <SpecialRequest />
            </MemoryRouter>
        );
        global.fetch=mockFetch;
        const user = userEvent.setup();
        await user.type(screen.getByLabelText("Job:"), "Astronaut")
        await user.type(screen.getByLabelText("Description:"), "Astronaut Description")
        await user.type(screen.getByLabelText("Hourly Rate Suggestion:"), "100")
        await user.click(screen.getByRole("button"));
        await new Promise((resolve) => setTimeout(resolve, 0))
        const body = JSON.parse(mockFetch.mock.calls[0][1].body)
        expect (mockFetch).toHaveBeenCalledTimes(1);
        expect(body).toMatchObject({
            "job": "Astronaut",
            "description": "Astronaut Description",
            "hourlyrate": 100,
            "customerrating": "0 Stars"
        })
    })
})