import "./Task1Page.css";

import VideoPlayer from "../components/VideoPlayer";
import DescriptionPane from "../components/DescriptionPane";
import TaskDescription from "../components/TaskDescription";
import TaskNavigation from "../components/TaskNavigation";

export default function Task1Page(props) {
	return (
		<div id="main-container">
			<h1 style={{ flexGrow: 2 }}>Task 1</h1>
			<div id="left-and-right-panes-container">
				<div id="left-pane-div">
					<div id="task-description-div">
						<p style={{ margin: 0 }}>
							<b>Task description (please read carefully)</b>
						</p>

						<TaskDescription
							id="task-description-1"
							description={props.taskDescription}
							width={600}
						/>
					</div>
					<div id="video-player-div">
						<VideoPlayer
							id="video-player"
							videoUrl={props.videoUrl}
							width="600px"
							height="350px"
							onVideoPlay={props.handleVideoPlay}
						/>
					</div>
				</div>
				<div id="right-pane-div">
					<h4 style={{ marginBottom: "3px" }}>Please type here</h4>
					<DescriptionPane
						key="description-pane-t1p3"
						id="description-pane"
						width={550}
						height={600}
						handleNewData={props.handleNewData}
					/>
				</div>
			</div>
			<div id="task-navigation-div">
				<TaskNavigation
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></TaskNavigation>
			</div>
		</div>
	);
}
