import React from "react";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import "video.js/dist/video-js.css";

import LoginPage from "./pages/LoginPage";
import Task2Page from "./pages/Task2Page";
import Task1Page from "./pages/Task1Page";

import { UserProvider } from "./contexts/UserContext";

import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videoId: "", token: "", currentPage: "/task1" };
		this.user = "";
		this.currentPage = "task1";

		this.setToken = this.setToken.bind(this);
		this.getToken = this.getToken.bind(this);
		this.handleVideoPlay = this.handleVideoPlay.bind(this);
		this.handleNavigationButtonClick = this.handleNavigationButtonClick.bind(this);
	}

	render() {
		const token = this.getToken();

		if (!token) {
			return <LoginPage setToken={this.setToken} />;
		}

		let page = (
			<Task1Page
				videoId={this.state.videoId}
				handleVideoPlay={this.handleVideoPlay}
				handleNavigationButtonClick={
					this.handleNavigationButtonClick
				}></Task1Page>
		);
		if (this.currentPage === "task2") {
			page = (
				<Task2Page
					handleVideoPlay={this.handleVideoPlay}
					handleNavigationButtonClick={
						this.handleNavigationButtonClick
					}></Task2Page>
			);
		}

		console.log(this.state.currentPage);

		return (
			<React.Fragment>
				<UserProvider value={this.user}>
					<Router>
						<Redirect to={this.state.currentPage}></Redirect>
						<Switch>
							<Route
								exact
								path="/task1"
								render={() => (
									<Task1Page
										videoId={this.state.videoId}
										handleVideoPlay={this.handleVideoPlay}
										handleNavigationButtonClick={
											this.handleNavigationButtonClick
										}></Task1Page>
								)}></Route>
							<Route
								exact
								path="/task2"
								render={() => (
									<Task2Page
										handleVideoPlay={this.handleVideoPlay}
										handleNavigationButtonClick={
											this.handleNavigationButtonClick
										}></Task2Page>
								)}
								handleVideoPlay={this.handleVideoPlay}
								handleNavigationButtonClick={
									this.handleNavigationButtonClick
								}></Route>
						</Switch>
					</Router>
				</UserProvider>
			</React.Fragment>
		);
	}

	handleNavigationButtonClick(currentPage, btn) {
		let taskNum = parseInt(currentPage.split("task")[1]);
		if (taskNum === 2 && btn === "next") return;
		if (taskNum === 1 && btn === "prev") return;

		if (btn === "next") {
			taskNum += 1;
		} else if (btn === "prev") {
			taskNum -= 1;
		} else {
			return;
		}

		this.setState({ currentPage: `task${taskNum}` });
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
