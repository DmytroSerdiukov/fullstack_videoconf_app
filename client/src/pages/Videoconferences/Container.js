import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import UserAPI from './../../api/api';
import VideoconferencesAPI from '../../api/videoconferences';
import VideoconferencesMarkup from './Markup';


//async func -> get user conferences
//create videoconf
//delete videoconf
//join videoconf


const VideoconferencesContainer = () => {
    const [me, setMe] = useState(null)
    const [conferences, setConferences] = useState(null)
    const getData = async() => {
        const userProfile = await UserAPI.getMyProfile(Cookies.get('user'))
        console.log('profile', userProfile.data.profile)
        const me = userProfile.data.profile
        setMe(me)
        console.log(me)

    }

    const getUserConferences = async() => {
        const userId = Cookies.get('user')
        const conferences = await VideoconferencesAPI.getUserConferences(userId)
        setConferences(conferences.data.conferences)
        console.log(conferences.data.conferences)
    }

    useEffect( () => {
        getUserConferences()
        getData()
    }, [])
    
    


    const createVideoconference = async(conflabel) => {
        await VideoconferencesAPI.createConference(Cookies.get('user'), conflabel)
    }

    const deleteVideoconference = () => {

    }

    return <VideoconferencesMarkup
        me={me}
        conferences={conferences}
        getUserConferences={getUserConferences}
        createVideoconference={createVideoconference}
        deleteVideoconference={deleteVideoconference}
    />
}

export default VideoconferencesContainer