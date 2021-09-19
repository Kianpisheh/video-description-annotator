import React from 'react';
import videojs from 'video.js'
import 'videojs-vr'

import 'video.js/dist/video-js.css'
import './VideoPlayer.css'

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate Video.js
        // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        //     console.log('onPlayerReady', this)
        // });
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
            const player = this;
            player.mediainfo = player.mediainfo || {}
            player.mediainfo.projection = 'Sphere'
            player.vr({
                projection: 'AUTO',
                debug: true,
                forceCardboard: false
            });
        });

        

    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div data-vjs-player>
                <video id="video-player" ref={node => this.videoNode = node} className="video-js" crossOrigin="anonymous"></video>
            </div >
        )
    }
}