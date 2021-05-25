import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = ({authIn}) => {
    return <>
        {authIn ?
        <div>
            <Link to='/profile'>Profile</Link>
            <Link to='/users'>Users</Link>
            <Link to='/videoconferences'>Videoconferences</Link>
            <Link to='/messages'>Messages</Link>
        </div>
        : null}
    </>
}

export default Navigation