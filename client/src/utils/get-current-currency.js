import { CURRENT_CURRENCY_BASE_URL } from "./api-constants"

const BASE_URL = CURRENT_CURRENCY_BASE_URL

const getCurrency = async (setCurrency) => {
    fetch(
        `${BASE_URL}/currency`
    )
        .then(res => setCurrency(JSON.stringify(res)))
}


export default getCurrency