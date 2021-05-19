


const VideoconferencesAPI = {
    getConferences: async(id) => {
        try {
            const conferences = await Videoconferences.find({userId: id})
            return conferences
        } catch (e) {
            console.log(e.message)
        }
    },

    createConference: async() => {

    }
}

export default VideoconferencesAPI