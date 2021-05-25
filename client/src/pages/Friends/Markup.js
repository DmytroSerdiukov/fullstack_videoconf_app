import Cookies from 'js-cookie';
import React from 'react';

const FriendsPage = ({users}) => {

    return <div>
        {users === null || users.length == 0 ? 'U don have friends :D' :
         users.map(f => {
            if (f.requester == Cookies.get('user'))
                return <div style={{
                    width: '300px',
                    height: '100px',
                    border: '1px solid black'
                }}>{f.recipient}</div>
            })
        }
    </div>
}

export default FriendsPage