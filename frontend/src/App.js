import React from "react";

import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";

import { StudyDataProvider } from "./contexts/StudyDataContext";

import getStudyData from "./ActivityData";

import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videoId: "", token: "", currentTask: 0 };
		this.user = "";
		this.sessionTime = "";
		this.taskSequence = null;

		this.setToken = this.setToken.bind(this);
		this.getToken = this.getToken.bind(this);
		this.getSessionTime = this.getSessionTime.bind(this);
		this.handleVideoPlay = this.handleVideoPlay.bind(this);
		this.handleNavigationButtonClick = this.handleNavigationButtonClick.bind(this);
	}

	render() {
		const token = this.getToken();

		if (!token) {
			return <LoginPage setToken={this.setToken} />;
		}

		// set the study task
		const [task, _] = getStudyData(this.user, this.state.currentTask);

		const studyData = { user: this.user, sessionTime: this.sessionTime, task: task };

		return (
			<React.Fragment>
				<StudyDataProvider value={studyData}>
					<TaskPage
						videoId={this.state.videoId}
						handleVideoPlay={this.handleVideoPlay}
						handleNavigationButtonClick={
							this.handleNavigationButtonClick
						}></TaskPage>
				</StudyDataProvider>
			</React.Fragment>
		);
	}

	handleNavigationButtonClick(btn) {
		const [_, totalTaskNum] = getStudyData(this.user, this.state.currentTask);
		if (btn === "next") {
			if (this.state.currentTask >= totalTaskNum - 1) return;
			this.setState({ currentTask: this.state.currentTask + 1 });
		} else if (btn === "prev") {
			if (this.state.currentTask <= 0) return;
			this.setState({ currentTask: this.state.currentTask - 1 });
		}
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
		this.sessionTime = this.getSessionTime();
		sessionStorage.setItem("user", this.user);
		this.forceUpdate();
	}

	getToken() {
		const tokenString = sessionStorage.getItem("token");
		const userToken = JSON.parse(tokenString);
		this.user = sessionStorage.getItem("user");
		return userToken?.token;
	}

	getSessionTime() {
		let d = new Date();
		const sessionTime = `${d.getFullYear()}-${
			d.getMonth() + 1
		}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
		return sessionTime;
	}
}

export default App;
