import axios from 'axios'

const UserAPI = {
    authMe: async(body) => {
        await axios.post("https://localhost:5000", body)
    },
    
    getUserProfile: async() => {
        await axios.get("https://localhost:5000/profile:id")
    }
}

export default UserAPI

