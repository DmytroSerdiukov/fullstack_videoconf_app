import React, { useEffect, useState } from 'react'
import VideoconferenceMarkup from './Markup'
import io from 'socket.io-client'

const VideoconferenceContainer = (props) => {

    const myVideo = React.useRef()
    const ENDPOINT = 'http://localhost:5000'
    const streamConstraints = { audio: true, video: true };
    
    const [stream, setStream] = useState()
    
    const socket = io(ENDPOINT, {
        transport : ['websocket'],
    })

    useEffect( () => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then( (stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })
    }, [])



    return <VideoconferenceMarkup 
        stream = {stream}    
        videoRef = {myVideo}
    />
}

export default VideoconferenceContainer