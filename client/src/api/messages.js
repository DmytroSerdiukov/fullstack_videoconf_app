import axios from "axios"
const URL = "http://localhost:5000"

const MessagesAPI = {
    getUserMessages: async(id) => {
        const messages = axios.post(`${URL}/messages/:id`)
        return messages
    }
}

export default MessagesAPI