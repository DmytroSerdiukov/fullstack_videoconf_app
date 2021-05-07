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
        console.log(data)
        const body = {
            title:'USER_DATA',
            user: {
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
            }
        }
        const response = await axios.post("http://localhost:5000/register", body)
        return response
    },

    getUserProfile: async() => {
        await axios.get("http://localhost:5000/profile:id")
    },
    
    getUsers: async() => {
        const users = await axios.get("http://localhost:5000/users")
        return users
    }
}

export default UserAPI

