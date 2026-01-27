
const API_URL = import.meta.env.VITE_API_URL;

export async function getCurrencies() {
    try {
        const response = await fetch(`${API_URL}/currency`);

        if (!response.ok) {
            const text = await response.text();
            throw new Error(text || "Server problem!");
        }

        return response.json();
    }
    catch (error) {
        throw new Error(`Cannot connect to the API: ${error}`);
    }
}