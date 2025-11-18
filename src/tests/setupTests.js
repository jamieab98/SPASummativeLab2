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
export const mockUpdatedService = {
    "id": "69",
    "job": "Astronaut",
    "description": "Astronaut Description",
    "hourlyrate": "500",
    "customerrating": "3.3"
}
export const mockFetch = global.fetch = vi.fn(()=>
    Promise.resolve({
        json: ()=>Promise.resolve(mockServices)
    })
)
export const mockUpdateFetch = global.fetch = vi.fn(()=>
    Promise.resolve({
        json: () => Promise.resolve(mockUpdatedService)
    })
)
export const mockSetServices = vi.fn()