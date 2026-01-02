import "./App.css";
import { useState } from "react";

function App() {
    const [showCurrencies, setShowCurrencies] = useState(true);

    const currencies = [
        { code: "EUR", name: "Euro" },
        { code: "USD", name: "US Dollar" },
        { code: "GBP", name: "British Pound" },
        { code: "BGN", name: "Bulgarian Lev" }
    ];

    return (
        <div className="app">
            <h1 className="title">Currency App</h1>

            {!showCurrencies && (
                <ul className="currency-list">
                    {currencies.map(currency => (
                        <CurrencyInfo
                            key={currency.code}
                            name={currency.name}
                            code={currency.code}
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

function CurrencyInfo({ name, code }) {
    return (
        <li className="currency-item">
            <span>{name}</span>
            <strong>{code}</strong>
        </li>
    );
}

export default App;