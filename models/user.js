import mongoose from 'mongoose'
import {model} from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const User = model('User', Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    email: String,
    password: String,
    friends: [{type: Schema.Types.ObjectId, ref: 'Friendship'}],
    videoconferences: [{type: ObjectId, ref: 'Videoconference'}]
}))


export const Friendship = model('Friendship', Schema({
    id: Schema.Types.ObjectId,
    requester: { type: Schema.Types.ObjectId, ref: 'User'}, //ID
    recipient: { type: Schema.Types.ObjectId, ref: 'User'}, //ID
    status: {
        type: Number,
        enums: [
            0,    //'add friend',
            1,    //'requested',
            2,    //'pending',
            3,    //'friends'
        ]
    }
}))
 



export const Videoconference = model('Videoconference', Schema({
    id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    conferenceLabel: String,
    users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}))

