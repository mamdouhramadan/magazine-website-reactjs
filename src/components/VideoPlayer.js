import React, { useRef, useState } from 'react'

const VideoPlayer = ({ src }) => {
    const vidRef = useRef(null);
    const [play, setpaly] = useState(false)

    const handlePlayVideo = () => {
        if (!play) {

            vidRef.current.play();
        }
        else {
            vidRef.current.pause()
        }
        setpaly(!play)
    }

    return (
        <div className='video-player'>
            <div className={`overlay-play ${play ? 'pause' : 'play'}`}>
                <button onClick={handlePlayVideo} className='play-btn'>
                    <ion-icon name={play ? "pause-circle" : "play"}></ion-icon>

                </button>
            </div>

            <video ref={vidRef} >
                <source src={src} type="video/mp4" />
                Your browser does not support HTML video.
            </video>
        </div>
    )
}

export default VideoPlayer