import { Button } from '@material-ui/core';
import Cookies from 'js-cookie';
import React from 'react';

const User = ({id, firstname, lastname, FriendRequest}) => {

    const ButtonClick = () => {FriendRequest(Cookies.get('user'), id)}

    return <div 
        style={{
            width: '300px',
            height: '100px',
            border: '1px solid black',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '24px'
        }}>
        <div >{firstname}</div>
        <div>{lastname}</div>
        { id === Cookies.get('user') ? null : <Button
                    onClick={ButtonClick}
                    variant="contained" 
                    color="primary"
                    style={{flexDirection: 'flex-end',
                        height:'30px',
                        margin: '5px'

                    }}>
                        Створити контакт
                    </Button>
        }
    </div>
}


const UsersPageMarkup = ({users, onButtonClick, onFriendshipRequest}) => {
    console.log(users)
    return <div>
        <div style={{textAlign: 'center',
                    fontSize: '24px'}}>Контакти</div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '300px',
            margin: '0 auto',
            marginTop: '40px'
        }}>
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