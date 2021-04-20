import axios from 'axios'

const UserAPI = {
    authMe: async(data) => {
        const body = {
            title:'User Data',
            user: {
            password: data.password,
            email: data.email
        }}
        const response = await axios.post("http://localhost:5000/auth", body)
        return response
    },
    
    getUserProfile: async() => {
        await axios.get("http://localhost:5000/profile:id")
    }
}

export default UserAPI

