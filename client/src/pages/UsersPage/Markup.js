import React from 'react';

const User = ({firstname, lastname}) => {

return <div>
        <div>{firstname}</div>
        <div>{lastname}</div>
    </div>
}


const UsersPageMarkup = ({users}) => {
    console.log(users)
    return <div>
        <div>users</div>
        <div>{users === null? 'No users' : users.users.map(
            u => <User firstname={u.firstname} lastname={u.lastname}/>
        )}</div>
    </div>
}

export default UsersPageMarkup