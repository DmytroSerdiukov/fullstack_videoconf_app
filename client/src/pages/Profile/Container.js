import React from 'react';
import ProfileMarkup from './Markup';
import { setAuth } from '../../reducers/auth'
import { connect } from 'react-redux';
import { getUserId } from '../../reducers/selectors';


const ProfileContainer = (props) => {
    return <ProfileMarkup 
            {...props}
        />
}


let props = (state) => ({
    authIn: state.auth.authIn,
    userId: getUserId(state)
})

export default connect(props, {setAuth})(ProfileContainer)