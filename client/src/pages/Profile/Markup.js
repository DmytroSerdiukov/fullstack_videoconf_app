import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'


const UserData = ({profile}) => {
    if(profile != null) {
    return <>
        <h1>{profile.firstname}</h1>
        <h1>{profile.lastname}</h1>
    </>
    }
    else {
        return <div>problem with data</div>
    }
}

const ProfileMarkup = ({profile, authIn, userId, setAuth}) => {

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
            <UserData profile={profile}/>
        </div>
    </>
}

export default ProfileMarkup