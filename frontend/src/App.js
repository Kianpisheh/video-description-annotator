import React from "react";

import "video.js/dist/video-js.css";

import VideoPlayer from "./components/VideoPlayer";
import DescriptionPane from "./components/DescriptionPane";
import Login from "./components/Login"

import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.state ={token: ""};
        this.user = "";

        this.setToken = this.setToken.bind(this);
        this.getToken = this.getToken.bind(this);

    }


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


        const token = this.getToken();

        if (!token) {
            return <Login setToken={this.setToken} />
        }

        return (
            <div id="main-container">
                <div id="player-container">
                    <VideoPlayer id="video-player" {...videoOptions} />
                </div>
                <DescriptionPane id="description-pane" videoID="ocean" user={this.user} />
            </div>
        );
    }


    setToken(userToken, username) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        this.user = username;
        sessionStorage.setItem('user', this.user);
        this.forceUpdate();
    }
    
    getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        this.user = sessionStorage.getItem('user');
        return userToken?.token
    }


    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        //this.callAPI();
    }
}

export default App;
