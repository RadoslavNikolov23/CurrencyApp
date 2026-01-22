import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [currencies, setCurrencies] = useState([]);
    const [showCurrencies, setShowCurrencies] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7279/api/currency")
            .then(response => {
                if (!response. ok) {
                    throw new Error("Failed to load currencies");
                }
                return response.json();
            })
            .then(data => setCurrencies(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="app">
            <h1 className="title">Currency App</h1>

            {!loading && ! error && !showCurrencies && (
                <div className="table-container">
                    <table className="currency-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Currency</th>
                                <th>For 1 EUR</th>
                                <th>EUR for 1 Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencies.map(currency => (
                                <CurrencyRow
                                    key={currency. currency}
                                    currency={currency.currency}
                                    code={currency.code}
                                    forOneEuro={currency.forOneEuro}
                                    euroForOneCurrency={currency.euroForOneCurrency}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <button
                className="button"
                onClick={() => setShowCurrencies(!showCurrencies)}
                disabled={loading}
                style={{ display: error ? "none" : "block" }}
            >
                {showCurrencies ?  "Show currencies" : "Hide currencies"}
            </button>

            {loading && <p className="loading">Loading currencies...</p>}

            {error && <p className="error">{error}</p>}
        </div>
    );
}

function CurrencyRow({ currency, code, forOneEuro, euroForOneCurrency }) {
    return (
        <tr>
            <td className="currency-code">{code}</td>
            <td className="currency-name">{currency}</td>
            <td className="currency-rate">{forOneEuro}</td>
            <td className="currency-rate">{euroForOneCurrency}</td>
        </tr>
    );
}

export default App;