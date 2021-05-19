import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import VideoconferencesAPI from '../../api/videoconferences';
import VideoconferencesMarkup from './Markup';


//async func -> get user conferences
//create videoconf
//delete videoconf
//join videoconf


const VideoconferencesContainer = () => {
    
    const [conferences, setConferences] = useState(null)
    useEffect( () => {
        getUserConferences()
    }, [])
    
    const getUserConferences = async() => {
        const userId = Cookies.get('user')
        const conferences = await VideoconferencesAPI.getUserConferences(userId)
        setConferences(conferences.data.conferences)
        console.log(conferences.data.conferences)
    }

    const createVideoconference = async(conflabel) => {
        await VideoconferencesAPI.createConference(Cookies.get('user'), conflabel)
    }

    const deleteVideoconference = () => {

    }

    return <VideoconferencesMarkup
        conferences={conferences}
        getUserConferences={getUserConferences}
        createVideoconference={createVideoconference}
        deleteVideoconference={deleteVideoconference}
    />
}

export default VideoconferencesContainer