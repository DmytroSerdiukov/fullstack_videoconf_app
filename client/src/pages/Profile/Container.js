import React from 'react';
import ProfileMarkup from './Markup';
import { setAuth } from '../../reducers/auth'
import { connect } from 'react-redux';

const ProfileContainer = ({authIn, setAuth}) => {
    return <ProfileMarkup 
            authIn={authIn} 
            setAuth={setAuth}
        />
}


let props = (state) => ({
    authIn: state.auth.authIn
})

export default connect(props, {setAuth})(ProfileContainer)