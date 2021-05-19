import mongoose from 'mongoose'
import {model} from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const Videoconferences = model('Videoconferences', Schema({
    userId: ObjectId,
    conferenceLabel: String,
    participants: [{user: ObjectId, ref:'User'}]
}))
