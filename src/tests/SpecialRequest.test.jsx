import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SpecialRequest from "../SpecialRequest"
import { MemoryRouter } from "react-router-dom";
import { mockSetServices } from "./setupTests";

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
})