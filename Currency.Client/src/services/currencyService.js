import { api } from "./api";	


export async function getAllCurrencies() {
   return api.get("/currencies");
}

//TODO: Implement conversion endpoint in backend and then uncomment this function
// export async function convertCurrency(data) {
//     return api.post("/currency/convert", data);
// }
