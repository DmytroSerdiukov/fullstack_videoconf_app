import axios from 'axios'

const UserAPI = {
    authMe: async(data) => {
        await axios.post("https://localhost:5000", {
        title:'User Data',
        body:{
            password: data.password,
            email: data.email
        }})
    },
    
    getUserProfile: async() => {
        await axios.get("https://localhost:5000/profile:id")
    }
}

export default UserAPI

