import * as axios from 'axios'
import mongoose, { Schema } from 'mongoose'
import { ObjectId } from 'bson'
import { User, Friendship } from '../models/user'


const UserAPI = {
    registerUser: async(body) => {
        try {
            const {firstname, middlename, lastname, email, 
                password} = body.user
            const user = await User.findOne({email: email})
            if (user) {
              return 0
            }
            if (email === '')
                return 0
            if (password === '')
                return 0
            const newUser = new User({
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                email: email,
                password: password,
            })
            await newUser.save()
            .catch(e => console.error(e))
            return 1

        } catch (e) {
            return 0
        }

    },

    authUser: async(body) => { 
        const userData = body.user
        const {email, password} = userData
        const user = await User.findOne({email: email})
        if (user.password == password)
            return {
                message: 'AUTH_COMPLETED',
                status: 1,
                userId: user._id
            }
        return {
            message: 'AUTH_FAILED',
            status: 0
        }
    },

    getUser: async() => {

    },

    getUsers: async() => {
        const users = await User.find()
        return users
    },
    
    makeFriendshipRequest: async(body) => {
        try {
            const {userA, userB} = body
            const sender = await Friendship.findOneAndUpdate(
                {
                    requester: userA,
                    recipient: userB
                },
                { $set: {status: 1} },
                { upsert: true, new: true }
    
            )
            console.log(sender)
    
            const accepter = await Friendship.findOneAndUpdate(
                {
                    requester: userB, //ID
                    recipient: userA
                },
                { $set: {status: 2} },
                { upsert: true, new: true }
            )
            console.log(accepter)
        } catch (e) {
            console.log(e.message)
        }
    },

    getFriends: async(id) => {
        try{
            console.log(id)
            const friends = await Friendship.find(
                
            )
            return friends
        } catch (e) {
            console.log(e.message)
        }
    }

}


// export const Friendship = model('Friendship', Schema({
//     requester: { type: Schema.Types.ObjectId, ref: 'User'}, //ID
//     recipient: { type: Schema.Types.ObjectId, ref: 'User'}, //ID
//     status: {
//         type: Number,
//         enums: [
//             0,    //'add friend',
//             1,    //'requested',
//             2,    //'pending',
//             3,    //'friends'
//         ]
//     }
// })) 



export default UserAPI