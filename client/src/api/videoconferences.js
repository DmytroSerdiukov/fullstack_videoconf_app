import axios from "axios"
const URL = "http://localhost:5000"


const VideoconferencesAPI = {
    getUserConferences: async(id) => {
        try{
            const userId = id
            console.log('userID', userId)
            const body = {
                message: 'userId',
                userId: userId
            }
            console.log('body', body)
            const conferences = await axios.get(`${URL}/videoconferences`, body)
            return conferences
        } catch(e) {
            console.log(e.message)
        }
    },

    createConference: async(id, conflabel) => {
        try {
            const body = {
                id: id,
                conflabel: conflabel
            }
            axios.post(`${URL}/videoconferences/create`, body)
        } catch (e) {
            console.log(e.message)
        }
    }
}

export default VideoconferencesAPI