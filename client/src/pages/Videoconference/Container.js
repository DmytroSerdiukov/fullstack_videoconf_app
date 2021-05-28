import React, { useEffect, useState } from 'react'
import VideoconferenceMarkup from './Markup'
import io from 'socket.io-client'
import Peer from "simple-peer"
import Cookies from 'js-cookie'

const VideoconferenceContainer = (props) => {

    const myVideo = React.useRef()
    const ENDPOINT = 'http://localhost:5000'
    const peer = new Peer(undefined,{
        host:'/http://localhost:5000'
    })
    const grid = React.createRef()
    const [stream, setStream] = useState()
    const videoGrid = document.getElementById('video_grid')
    
    const socket = io(ENDPOINT, {
        transport : ['websocket'],
    })

    useEffect( () => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then( (stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })
        
        socket.on('connection', socket => {
            socket.emit('join', {
                username: Cookies.get('user')
            })
        })

        socket.on('user-connected', userId => {
            connectToNewUser(userId, stream)
        })

    }, [])

    const connectToNewUser = (userId, stream) => {
        const call = peer.call(userId, stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream)
        })
    }

    const addVideoStream = (video, stream) => {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        videoGrid.append(video)
    }

    return <VideoconferenceMarkup
        me={props.me}
        stream = {stream}    
        videoRef = {myVideo}
    />
}

export default VideoconferenceContainer