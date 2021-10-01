import "./Task2Page.css";

import PropositionsPane from "../components/PropositionsPane";
import TaskDescription from "../components/TaskDescription";
import VideoPlayer from "../components/VideoPlayer";
import TaskNavigation from "../components/TaskNavigation";

export default function Task2Page(props) {
	const taskDescription =
		"How do you characterize the activity in the video? Please specify propositions that distinguish this activity from any other activity";

	return (
		<div id="main-container">
			<h1 style={{ flexGrow: 2 }}>Task 2</h1>
			<div id="left-and-right-panes-container">
				<div id="left-pane-div">
					<div id="task-description-div">
						<TaskDescription description={taskDescription}></TaskDescription>
					</div>
					<div id="video-player-div">
						<VideoPlayer
							id="video-player"
							width="500px"
							height="320px"
							onVideoPlay={props.handleVideoPlay}
						/>
					</div>
				</div>
				<div id="right-pane-div">
					<h5 style={{ marginBottom: "3px" }}>Please type here</h5>
					<PropositionsPane
						rows={5}
						cols={35}
						options={["sometimes", "usually", "always"]}></PropositionsPane>
				</div>
			</div>
			<div id="task-navigation-div">
				<TaskNavigation
					currentPage="task2"
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></TaskNavigation>
			</div>
		</div>
	);
}
