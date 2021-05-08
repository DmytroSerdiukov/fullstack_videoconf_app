import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return <>
        <Link to='/profile'>Profile</Link>
        <Link to='/users'>Users</Link>
    </>
}

export default Navigation