import React, { useState } from 'react';
import Chat from '../Chat/Container';
import styles from './styles.module.css'

const VideoconferenceMarkup = ({videoRef, stream}) => {
    // const[muted, setMuted] = useState(false)
    return <>
    <div class={styles.leftside}>
        <div>
            <div>
                {stream && <video style={styles}playsInline muted  ref={videoRef} 
                autoPlay style={{ width: "300px", height: '300px' } } ></video> || 
                    <div style={{width: "300px", height: "200px", backgroundColor: '#000',
                        color: '#fff', fontSize: '30px', textAlign: 'center',
                    }}>user</div>} 
            </div>
            {/* <button onClick={()=>setMuted(!muted)}>
                {muted ? 
                'turn on micro':
                'turn off micro'}
            </button> */}
        </div>
        <Chat />
    </div>
    </>
}

export default VideoconferenceMarkup