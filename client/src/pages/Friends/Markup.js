import Cookies from 'js-cookie';
import React from 'react';

const FriendsPage = ({users}) => {

    const filterFriends = (users) => {
        console.log(users)

        if (users === null)
            return null
        // const friends = users.filter( (u) => u.requester == Cookies.get('user'))
        // return friends
        return users
    }

    const friends = filterFriends(users)

    return <div>
        {users === null || users.length == 0 ? 'U don have friends :D' : users.map(f => <div>{f.firstname}</div>)
        // users.map( u => <div>{u.requester}</div>)
        }
    </div>
}

export default FriendsPage