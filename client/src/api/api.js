import axios from 'axios'
const URL = "http://localhost:5000"

const UserAPI = {
    authMe: async(data) => {
        const body = {
            title:'USER_DATA',
            user: {
            email: data.email,
            password: data.password
        }}
        const response = await axios.post(`${URL}/auth`, body)
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
        const response = await axios.post(`${URL}/register`, body)
        return response
    },

    getUserProfile: async(id) => {
        await axios.get(`${URL}/profile:${id}`)
    },

    getMyProfile: async(id) => {
        const body = {
            id: id
        }
        const profile = await axios.post(`${URL}/profile`, body)
        return profile
    },
    
    getUsers: async() => {
        const users = await axios.get(`${URL}/users`)
        return users
    },
    
    getFriends: async(id) => {
        try {
            const body = {
                userId: id
            }
            console.log(body)
            const friends = await axios.get(`${URL}/friends`, body)
            return friends
        } catch (e) {
            console.log(e)
        }

    }
    ,

    makeFriendship: async(senderId, accepterId) => {
        try{
            const body = {
                userA: senderId,
                userB: accepterId
            }
            await axios.post(`${URL}/users/add/:${accepterId}`, body)
        } catch(e) {
            console.log(e)
        }
    },

    breakFriendship: async() => {

    },


}

export default UserAPI

