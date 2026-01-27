import "./App.css";
import { useState } from "react";
import { useCurrencies } from "./hooks/useCurrencies";



function App() {

    const { currencies, loading, error } = useCurrencies();
    const [ showCurrencies, setShowCurrencies ] = useState(true);
   

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