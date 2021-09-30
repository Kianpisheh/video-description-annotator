import "./Task1Page.css";

import VideoPlayer from "../components/VideoPlayer";
import DescriptionPane from "../components/DescriptionPane";
import TaskDescription from "../components/TaskDescription";
import TaskNavigation from "../components/TaskNavigation";

export default function Task1Page(props) {
	const taskDescription =
		"Please describe the activity which is performed in the video in terms of the steps that are taken by the actor to acomplish the activity?";

	return (
		<div id="main-container">
			<h1 style={{ flexGrow: 2 }}>Task 1</h1>
			<div id="left-and-right-panes-container">
				<div id="player-container">
					<div id="left-pane-div">
						<div id="task-description-div">
							<TaskDescription
								id="task-description-1"
								description={taskDescription}
							/>
						</div>
						<div id="video-player-div">
							<VideoPlayer
								id="video-player"
								width="600px"
								height="350px"
								onVideoPlay={props.handleVideoPlay}
							/>
						</div>
					</div>
				</div>
				<div id="right-pane-div">
					<h5 style={{ marginBottom: "3px" }}>Please type here</h5>
					<DescriptionPane
						id="description-pane"
						videoID={props.videoId}
						user={props.user}
					/>
				</div>
			</div>
			<div id="task-navigation-div">
				<TaskNavigation
					handleNavifationButtonClick={
						props.handleNavifationButtonClick
					}></TaskNavigation>
			</div>
		</div>
	);
}
