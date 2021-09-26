import React from "react";

import "video.js/dist/video-js.css";

import VideoPlayer from "./components/VideoPlayer";
import DescriptionPane from "./components/DescriptionPane";
import Login from "./components/Login";
import TaskDescription from "./components/TaskDescription";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videoId: "", token: "" };
        this.user = "";

        this.setToken = this.setToken.bind(this);
        this.getToken = this.getToken.bind(this);
        this.handleVideoPlay = this.handleVideoPlay.bind(this);
    }

    render() {
        const token = this.getToken();

        if (!token) {
            return <Login setToken={this.setToken} />;
        }

        var taskDescription1 =
            "Please describe the activity in the following video in terms of the steps taken by the actor to perform the activity";
        return (
            <div id="main-container">
                <div id="player-container">
                    <TaskDescription
                        id="task-description-1"
                        description={taskDescription1}
                    />
                    <VideoPlayer id="video-player" onVideoPlay={this.handleVideoPlay} />
                </div>
                <DescriptionPane
                    id="description-pane"
                    videoID={this.state.videoId}
                    user={this.user}
                />
            </div>
        );
    }

    handleVideoPlay(videoUrl) {
        // remove time from the url
        let newUrl = videoUrl;
        if (videoUrl.includes("&t=")) {
            const urlFirstHalf = videoUrl.split("&t=")[0];
            let urlSecondHalf = videoUrl.split("&t=")[1];
            if (urlSecondHalf.includes("&v=")) {
                urlSecondHalf = "&v=" + urlSecondHalf.split("&v=")[1];
            }
            newUrl = urlFirstHalf + urlSecondHalf;
        }

        if (this.state.videoId !== newUrl) {
            this.setState({ videoId: newUrl });
        }
    }

    setToken(userToken, username) {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        this.user = username;
        sessionStorage.setItem("user", this.user);
        this.forceUpdate();
    }

    getToken() {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        this.user = sessionStorage.getItem("user");
        return userToken?.token;
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }));
    }
}

export default App;
