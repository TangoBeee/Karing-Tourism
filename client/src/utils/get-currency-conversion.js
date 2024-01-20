import { CURRENCY_CONVERSION_BASE_URL } from "./api-constants"

const BASE_URL = CURRENCY_CONVERSION_BASE_URL

const convertCurrency = async (fromCurrency, toCurrency, amount, setAmount) => {
    fetch(
        `${BASE_URL}${import.meta.env.VITE_CURRENCY_API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`
    )
        .then(res => res.json())
        .then(data => setAmount(data.conversion_result))
}


export default convertCurrency