import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [currencies, setCurrencies] = useState([]);
    const [showCurrencies, setShowCurrencies] = useState(true);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
       // setLoading(true);
      //  setError(null);

        fetch("https://localhost:7279/api/currenc")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load currencies");
                }

                return response.json()
            })
            .then(data => setCurrencies(data))
            .catch(error => setError(error.message))
            .finally(()=>setLoading(false));
    }, []);


    return (
        <div className="app">
            <h1 className="title">Currency App</h1>

            {!loading && !error && !showCurrencies && (
                <ul className="currency-list">
                    {currencies.map(currency => (
                        <CurrencyInfo
                            key={currency.code}
                            code={currency.code}
                            name={currency.name}
                            rate={currency.rate}
                        />
                    ))}
                </ul>
            )}

            <button
                className="button"
                onClick={() => setShowCurrencies(!showCurrencies)}
                disabled={loading}
                style={{ display: error ? "none" : "block" }}
            >
                {showCurrencies ? "Show currencies" : "Hide currencies"}
            </button>

            {loading && <p>Loading...</p>}

            {error && <p className="error">{error}</p>}

        </div>
    );
}

function CurrencyInfo({ name, code, rate }) {
    return (
        <li className="currency-item">
            <strong>{code}</strong>
            <span>{name}</span>
            <span>{rate}</span>
        </li>
    );
}

export default App;