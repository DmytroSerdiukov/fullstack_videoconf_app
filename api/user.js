import * as axios from 'axios'
import { User } from '../models/user'


const UserAPI = {
    registerUser: async(body) => {
        const {firstname, middlename, lastname, email, 
            password} = body.user
        const user = await User.findOne({email: email})
        if (user) {
          return 0
        }
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
    },

    authUser: async() => { 

    },

    getUser: async() => {

    }
}

export default UserAPI