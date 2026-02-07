const API_URL = import.meta.env.VITE_API_URL;

async function apiRequest(url, options = {}) {
    const response = await fetch(`${API_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if(!response.ok){
        const text = await response.text();
        throw new Error(text || "API request failed. Try again!");
    }

    return response.json();
}

export const api = {
    get: (url) => 
        apiRequest(url),

    post: (url, data) => 
        apiRequest(url, { 
            method: "POST", 
            body: JSON.stringify(data) 
        }),

    put: (url, data) => 
        apiRequest(url, { 
            method: "PUT", 
            body: JSON.stringify(data) 
        }),
        
    delete: (url) => 
        apiRequest(url, { 
            method: "DELETE" 
        }),
}