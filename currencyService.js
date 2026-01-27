
const API_URL = import.meta.env.VITE_API_URL;

export async function getCurrencies() {

    const response = await fetch(`${API_URL}/currency`);

    if (!response.ok) {
        throw new Error("Failed to load currencies, API problem!");   
    }

    return response.json();
}