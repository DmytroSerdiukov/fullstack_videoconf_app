import React from 'react'
import UserAPI from '../../api/api'
import AuthPageMarkup from './Markup'


const AuthPageContainer = () => {

    const authMe = async(data) => {
        await UserAPI.authMe(data)
        .then(res => {
            console.log(res)
        })
        .catch(e => console.log('err',e))
    }

    return <AuthPageMarkup authMe={authMe} />
}

export default AuthPageContainer