import Cookies from 'js-cookie';
import React from 'react';

const User = ({id, firstname, lastname, FriendRequest}) => {

    const ButtonClick = () => {FriendRequest(Cookies.get('user'), id)}

    return <div>
        <div>{firstname}</div>
        <div>{lastname}</div>
        {/* {id == Cookies.get('user') ? null : 
        status == 1 ? <div>
            <button>Accept</button>
            <button>Cancel</button>
        </div> :
         status == 2 ?
            <button>Cancel</button>
            : status == 3 ? "u r friends": <button onClick = { (id) => {ButtonClick(id)}}>Make a contact</button>
        } */}
        <button onClick = {ButtonClick}>Make a contact</button>
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