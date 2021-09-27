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
                url="https://youtu.be/bfF4PATuQ0s?list=PLUb0DMgBZVOOdt6VnxipIjbFQWesrJkr3"
                onPlay={() => {
                    this.props.onVideoPlay(this.videoRef.current?.player?.player?.player?.getVideoUrl());
                }}
                controls
                width={this.props.width}
                height={this.props.height}
            />
        );
    }

    componentDidMount() {
        
    }

}
