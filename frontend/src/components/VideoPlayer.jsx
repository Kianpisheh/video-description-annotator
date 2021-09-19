import React from "react";
import "videojs-vr";

import "video.js/dist/video-js.css";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";

export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.videoRef = React.createRef()
    }

    render() {
        return (
            <ReactPlayer
            ref={this.videoRef}
                url="https://youtu.be/lrcDzmIGXWs?list=PL-3W-zZzHzX_3T63nVAH5EmNAhxBIUed7"
                onPlay={() => {
                    this.props.onVideoPlay(this.videoRef.current?.player?.player?.player?.getVideoUrl());
                }}
                controls
            />
        );
    }
}
