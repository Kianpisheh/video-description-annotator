import React, { useRef } from "react";
import "videojs-vr";

import "video.js/dist/video-js.css";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";


export default function VideoPlayer(props) {

    const videoRef = useRef(null);
    const { videoUrl, width, height } = props;

    return (
        <ReactPlayer
            ref={videoRef}
            url={videoUrl}
            onPlay={() => {
                props.onVideoPlay(videoRef.current?.player?.player?.player?.getVideoUrl());
            }}
            controls
            width={width}
            height={height}
        />
    );

}
