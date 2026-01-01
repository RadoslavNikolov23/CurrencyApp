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
        <div style={{ padding: "20px" }}>
            <h1>Currency App</h1>

            <button onClick={() => setShowCurrencies(!showCurrencies)}>
                Toggle currencies
            </button>

            {showCurrencies && (
                <ul>
                    {currencies.map(currency => (
                        <CurrencyInfo
                            key={currency.code}
                            name={currency.name}
                            code={currency.code}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

function CurrencyInfo({ name, code }) {
    return (
        <li>
            {name} ({code})
        </li>
    );
}

export default App;