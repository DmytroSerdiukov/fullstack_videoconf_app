import React, { useEffect, useState } from 'react'
import UserAPI from '../../api/api'
import AuthPageMarkup from './Markup'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { setAuth } from '../../reducers/auth'
import { connect } from 'react-redux'


const AuthPageContainer = ({authIn, setAuth}) => {

    const authMe = async(data) => {
        const value = new Date().getSeconds().toString()
        await UserAPI.authMe(data)
        .then(res => {
            if (res.data.status == 1)
                Cookies.set('user', value)
                setAuth(true)
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