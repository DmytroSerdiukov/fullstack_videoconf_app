
import { Schema } from 'mongoose'
import { Videoconference } from '../models/user'

const VideoconferencesAPI = {
    getConferences: async(id) => {
        try {
            const conferences = await Videoconference.find()
            console.log(conferences)
            return conferences
        } catch (e) {
            console.log(e.message)
        }
    },  

    createConference: async(id, conflabel) => {
        try {
            const newConference = new Videoconference({
                // id: Schema.Types.ObjectId,
                userId: id,
                conferenceLabel: conflabel,
                // users: [{type: Schema.Types.ObjectId, ref: 'User'}]
            })
            await newConference.save( (err) => {
                if (err) console.log(err.message)
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}

export default VideoconferencesAPI