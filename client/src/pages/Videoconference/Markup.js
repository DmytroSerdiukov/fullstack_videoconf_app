import React, { useState } from 'react';
import Chat from '../Chat/Container';
import styles from './styles.module.css'

const VideoconferenceMarkup = ({me, gridRef, videoRef, stream}) => {
    // const[muted, setMuted] = useState(false)
    console.log('me', me)
    return <>
    <div class={styles.leftside}>
        <div>
            <div>
                {/* <div>{me.firstname}</div> */}
                {stream && <video style={styles}playsInline muted  ref={videoRef} 
                autoPlay style={{ width: "600px", height: '400px' } } ></video> || 
                    <div style={{width: "300px", height: "200px", backgroundColor: '#000',
                        color: '#fff', fontSize: '30px', textAlign: 'center',
                    }}>{
                    // `${me.firstname} ${me.lastname}`||'user'
                }
                    </div>} 
            </div>
        </div>
        <div id="video_grid">

        </div>
        <Chat />
    </div>
    </>
}

export default VideoconferenceMarkup