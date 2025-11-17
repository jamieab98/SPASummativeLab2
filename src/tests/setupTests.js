import '@testing-library/jest-dom';
import { vi } from 'vitest';

export const mockServices = [
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
export const mockSetServices = vi.fn()