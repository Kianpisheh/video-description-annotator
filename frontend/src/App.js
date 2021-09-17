import React from "react";

import "video.js/dist/video-js.css";

import VideoPlayer from "./components/VideoPlayer";
import DescriptionPane from "./components/DescriptionPane";

import "./App.css";

class App extends React.Component {
    render() {
        var videoOptions = {
            controls: true,
            preload: "auto",
            autoplay: false,
            height: 400,
            width: 600,
            controlBar: {
                fullscreenToggle: false,
            },
            sources: [{ src: "//vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" }],
        };

        return (
            <div id="main-container">
                <div id="player-container">
                    <VideoPlayer id="video-player" {...videoOptions} />
                </div>
                    <DescriptionPane id="description-pane" />
            </div>
        );
    }

    componentDidMount() {}
}

export default App;
