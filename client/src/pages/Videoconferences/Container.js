import React, { useEffect, useState } from 'react';
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

    }

    const createVideoconference = () => {

    }

    const deleteVideoconference = () => {

    }

    return <VideoconferencesMarkup
        getUserConferences={getUserConferences}
        createVideoconference={createVideoconference}
        deleteVideoconference={deleteVideoconference}
    />
}

export default VideoconferencesContainer