import React, { useEffect, useState } from 'react'
import UserAPI from '../../api/api'
import AuthPageMarkup from './Markup'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { setAuth } from '../../reducers/auth'
import { connect } from 'react-redux'


const AuthPageContainer = ({authIn, setAuth}) => {

    const authMe = async(data) => {
        await UserAPI.authMe(data)
        .then(res => {
            if (res.data.status == 1)
                Cookies.set('user', 'loginTrue')
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

// let props = (state) => ({
//     authIn: state.auth.authIn
// })

// export default connect(props, {setAuth})(AuthPageContainer)
export default AuthPageContainer