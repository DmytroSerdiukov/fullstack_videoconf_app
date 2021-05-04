import {Schema, model} from 'mongoose'

export const User = model('User', new Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    email: String,
    password: String,
}))

