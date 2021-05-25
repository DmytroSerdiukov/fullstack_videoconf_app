import Cookies from 'js-cookie';
import React from 'react';

const User = ({id, firstname, lastname, FriendRequest}) => {

    const ButtonClick = () => {FriendRequest(Cookies.get('user'), id)}

    return <div 
        style={{
            width: '300px',
            height: '100px',
            border: '1px solid black',
            margin: '10px'
        }}>
        <div >{firstname}</div>
        <div>{lastname}</div>
        { id === Cookies.get('user') ? null : <button onClick = {ButtonClick}>Make a contact</button>}
    </div>
}


const UsersPageMarkup = ({users, onButtonClick, onFriendshipRequest}) => {
    console.log(users)
    return <div>
        <div>users</div>
        <div>
        {users === null? 'No users' : users.users.map(
            u => <User
                id={u._id} 
                onButtonClick
                firstname={u.firstname}
                lastname={u.lastname}
                FriendRequest={onFriendshipRequest}
                status = {u.friends.status}
            />
        )}
        </div>

    </div>
}

export default UsersPageMarkup