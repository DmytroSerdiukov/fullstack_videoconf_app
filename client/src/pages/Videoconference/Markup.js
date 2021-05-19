import React from 'react';


const VideoconferenceMarkup = ({videoRef, stream}) => {

    return <div>
        {stream && <video style={styles}playsInline muted={true}  ref={videoRef} 
        autoPlay style={{ width: "720px", height: '720px' }}></video>} 
    </div>
}

const styles = {
    margin: '0px',
    marginTop: '0px'
}
export default VideoconferenceMarkup