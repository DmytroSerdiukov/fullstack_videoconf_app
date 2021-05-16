import React, { useEffect, useState } from 'react'
import UserAPI from '../../api/api'
import AuthPageMarkup from './Markup'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'


const AuthPageContainer = ({userId, authIn, setAuth, setUserId}) => {
    const authMe = async(data) => {

        await UserAPI.authMe(data)
        .then(res => {
            if (res.data.status == 1) {
                setUserId(res.data.userId)
                Cookies.set('user', res.data.userId)
                setAuth(true)
            }
        })
        .catch(e => console.log('err',e))
    }

    return <>
        {
            authIn ? <Redirect to='/profile'/> :
            <AuthPageMarkup authMe={authMe} />
        }
    </>
}



export default AuthPageContainer