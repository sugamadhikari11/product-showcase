import axios from 'axios'
const options = {
    baseURL: "https://miralou-api.sagarlama.com/api"
}

const instance = axios.create(options)
export default instance