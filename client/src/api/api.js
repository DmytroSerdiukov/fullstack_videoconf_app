import axios from 'axios'

const UserAPI = {
    authMe: async(data) => {
        const body = {
            title:'USER_DATA',
            user: {
            email: data.email,
            password: data.password
        }}
        const response = await axios.post("http://localhost:5000/auth", body)
        return response
    },
    
    registerMe: async(data) => {
        const body = {
            title:'USER_DATA',
            user: {
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                password: data.password,
                repeatPassword: data.repeatpassword
            }
        }
        const response = await axios.post("http://localhost:5000/register", body)
        return response
    },

    getUserProfile: async() => {
        await axios.get("http://localhost:5000/profile:id")
    }
}

export default UserAPI

