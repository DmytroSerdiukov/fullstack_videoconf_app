import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'


const UserData = () => {
    return <>
    <div>firstname</div>
    <div>lastname</div>
    <div>email</div>
    </>
}

const ProfileMarkup = ({authIn, userId, setAuth}) => {

    const unloginUser = () => {
        Cookies.remove('user')
        setAuth(false)
    }

    return <>
        <div>
            {
                authIn ? <button onClick={unloginUser}>Unlogin</button> :
                <Redirect to='/' />
            }
            <UserData />
        </div>
    </>
}

export default ProfileMarkup