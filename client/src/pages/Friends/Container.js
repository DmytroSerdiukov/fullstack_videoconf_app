import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import UserAPI from '../../api/api';
import FriendsPage from './Markup';


const FriendsContainer = (props) => {


    const [friends, setFriends] = useState(null)
    const getUserFriends = async() => {
        try {
            const userId = Cookies.get('user')
            const data = await UserAPI.getFriends(userId)
            // console.log(data.data.friends)
            setFriends(data.data.friends)

        } catch (err) {
            console.log(err)
        }
    }



    useEffect( () => {getUserFriends()}, [])

    return <FriendsPage users={friends}/>
}

export default FriendsContainer