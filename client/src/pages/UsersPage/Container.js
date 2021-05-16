import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import UserAPI from '../../api/api'
import UsersPageMarkup from './Markup'


const UsersPageContainer = () => {


    const getUsers = async() => {
        const data = await UserAPI.getUsers()
        setUsers(data.data)
    }

    const makeFriendshipRequest = async(senderId, accepterId) => {
        await UserAPI.makeFriendship(senderId, accepterId)
    }


    const [users, setUsers] = useState(null)
    useEffect( () => {
        getUsers(Cookies.get('user'))
    }, [])

    const onButtonClick = (id) => {
        console.log(id)
    }

    return <>
        <div>
            <Link to='/friends'>Friends</Link>
        </div>
        <UsersPageMarkup 
        // onButtonClick={onButtonClick}
        onFriendshipRequest = {makeFriendshipRequest}
        users={users}
        />
    </>
}

export default UsersPageContainer