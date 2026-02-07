# 💱 Currency App (ASP.NET + React)

A simple full‑stack **currency rates application** built with **ASP.NET Core API** (backend) and **React + Vite** (frontend).

<img src="https://github.com/RadoslavNikolov23/CurrencyApp/blob/master/Currency.Common/OnLoadingPicture.png?raw=true" width="750"/>

The project is designed as a **learning project** to demonstrate:

* REST APIs with ASP.NET
* React fundamentals (components, hooks, services)
* Clean frontend ↔ backend communication
* Real‑world project structure

---

## 🧱 Tech Stack

### Backend

* ASP.NET Core Web API (.NET 8 / .NET 10‑ready)
* RESTful endpoints
* Services
* CORS enabled
* JSON responses

### Frontend

* React (with Vite)
* Custom hooks
* Service layer for API calls
* Modern CSS styling

---

## 📸 Screenshots

### Main Currency Table

<img src="https://github.com/RadoslavNikolov23/CurrencyApp/blob/master/Currency.Common/OnOpeningCurrencies.png?raw=true" width="750"/>

---

## 🔌 API Endpoints

### Get all currency rates

```
GET /api/currency
```

**Response:**

```json
[
  {
    "code": "USD",
    "currency": "US Dollar",
    "forOneEuro": 1.08,
    "euroForOneCurrency": 0.93
  }
]
```

---

## 🌐 Frontend ↔ Backend Communication

* React communicates with the API using `fetch`
* API base URL is stored in `.env`:

```env
VITE_API_URL=https://localhost:7279/api
```

* API calls are centralized in a **service layer**
* State management is handled via **custom React hooks**

---

## ▶️ Running the Project

### Backend

1. Open `Currency.Api` in Visual Studio
2. Set it as Startup Project
3. Run with **F5**

### Frontend

```bash
cd currency.client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## 🧑‍💻 Author

**Radoslav Nikolov**

---

⭐ If you find this project useful, feel free to star the repo!
