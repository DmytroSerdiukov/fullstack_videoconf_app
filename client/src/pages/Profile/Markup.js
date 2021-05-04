import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router'


const ProfileMarkup = ({authIn, setAuth}) => {

    const unloginUser = () => {
        Cookies.remove('user')
        setAuth(false)
    }

    return <div>
        {
            authIn ? <button onClick={unloginUser}>Unlogin</button> :
            <Redirect to='/' />
        }
    </div>
}

export default ProfileMarkup