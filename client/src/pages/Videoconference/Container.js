import React, { useEffect, useState } from 'react'
import VideoconferenceMarkup from './Markup'
import io from 'socket.io-client'
import Peer from "simple-peer"
const VideoconferenceContainer = (props) => {

    const myVideo = React.useRef()
    const ENDPOINT = 'http://localhost:5000'
    const peer = new Peer()
    const grid = React.createRef()
    const [stream, setStream] = useState()
    
    const socket = io(ENDPOINT, {
        transport : ['websocket'],
    })

    useEffect( () => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then( (stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
            addVideoStream(myVideo.current.srcObject, stream)
        })
        

        peer.on('call', call => {
            call.answer(stream)
            const video = document.createElement('video')
            call.on('stream', userVideoStream => {
                addVideoStream(video, userVideoStream)
            })
        })

    }, [])
    
    const addVideoStream = (video, stream) => {
        video.srcObject = stream 
        video.addEventListener('loadedmetadata', () => { // Play the video as it loads
            video.play()
        })
        grid.append(video) // Append video element to videoGrid
    }
    


    return <VideoconferenceMarkup
        gridRef = {grid}
        stream = {stream}    
        videoRef = {myVideo}
    />
}

export default VideoconferenceContainer