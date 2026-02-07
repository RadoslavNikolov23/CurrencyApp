import { useEffect, useState } from "react";
import { getAllCurrencies } from "../services/currencyService.js";



export function useCurrencies() {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllCurrencies()
            .then(data => setCurrencies(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return { currencies, loading, error };

}