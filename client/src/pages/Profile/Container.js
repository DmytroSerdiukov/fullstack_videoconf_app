import React, { useEffect, useState } from 'react';
import ProfileMarkup from './Markup';
import { setAuth } from '../../reducers/auth'
import { connect } from 'react-redux';
import { getUserId } from '../../reducers/selectors';
import UserAPI from '../../api/api'
import Cookies from 'js-cookie';


const ProfileContainer = (props) => {

    const [profile, setProfile] = useState([])

    const getUserData = async () => {
       const userProfile = await UserAPI.getMyProfile(Cookies.get('user'))
       console.log(userProfile.data.profile)
       setProfile(userProfile.data.profile)
    }

    useEffect(() => getUserData(), [])

    return <ProfileMarkup 
            {...props}
            profile={profile}
        />
}


let props = (state) => ({
    authIn: state.auth.authIn,
    userId: getUserId(state)
})

export default connect(props, {setAuth})(ProfileContainer)