import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [currencies, SetCurrencies] = useState([]);
    const [showCurrencies, setShowCurrencies] = useState(true);

useEffect(() => {
    fetch("https://localhost:7279/api/currency")
        .then(response => response.json())
        .then(data => SetCurrencies(data))
        .catch(error => console.error("Error fetching currencies:", error));
}, []);


    return (
        <div className="app">
            <h1 className="title">Currency App</h1>

            {!showCurrencies && (
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

            <button className="button" onClick={() => setShowCurrencies(!showCurrencies)}>
                {showCurrencies ? "Show currencies" : "Hide currencies"}
            </button>
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