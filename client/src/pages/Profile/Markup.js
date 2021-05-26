import { Button } from '@material-ui/core'
import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'


const UserData = ({profile}) => {
    if(profile != null) {
    return <>
        <h1>{profile.firstname}</h1>
        <h1>{profile.lastname}</h1>
        <div>{profile.email} </div>
    </>
    }
    else {
        return <div>problem with data</div>
    }
}

const ProfileMarkup = ({profile, userId}) => {


    return <>
        <div style={{
                // backgroundColor: 'red',
                width: '300px',
                margin: '0 auto',
                border: '3px solid blue',
                marginTop: '100px',
                borderRadius: '10px',
                textAlign: 'center'
            }}>
        <UserData profile={profile}/>
            
        </div>
    </>

}

export default ProfileMarkup