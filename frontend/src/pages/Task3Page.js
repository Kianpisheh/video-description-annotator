import "./Task3Page.css";

import VideoPlayer from "../components/VideoPlayer";
import PropositionsPane from "../components/PropositionsPane";
import TaskNavigation from "../components/TaskNavigation";
import TaskDescription from "../components/TaskDescription";

export default function Task3Page(props) {
	return (
		<div id="main-container">
			<h1>Task 3</h1>
			<div id="panes-container">
				<div id="right-pane">
					<h4 style={{ marginBottom: "0px" }}>
						<b>Task description (please read carefully)</b>
					</h4>
					<TaskDescription
						id="task-description-1"
						description={props.taskDescription}
						width={"20vw"}></TaskDescription>
				</div>
				<div id="left-pane">
					<h4 style={{ marginBottom: "10px" }}>Video 1</h4>
					<VideoPlayer
						key="player1"
						id="video-player"
						videoUrl={props.videoUrl}
						width="520px"
						height="300px"
						onVideoPlay={props.handleVideoPlay}></VideoPlayer>
					<h4 style={{ marginBottom: "10px" }}>Video 2</h4>
					<VideoPlayer
						key="player2"
						id="video-player"
						videoUrl={props.videoUrl2}
						width="520px"
						height="300px"
						onVideoPlay={props.handleVideoPlay}></VideoPlayer>
				</div>
				<div id="middle-pane">
					<h4 style={{ marginBottom: "10px" }}>Please type here</h4>
					<PropositionsPane
						width={420}
						height={"50vh"}
						rows={5}
						cols={35}
						options={["sometimes", "usually", "always"]}
						handleNewData={props.handleNewData}></PropositionsPane>
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

// import "./Task2Page.css";

// import PropositionsPane from "../components/PropositionsPane";
// import TaskDescription from "../components/TaskDescription";
// import VideoPlayer from "../components/VideoPlayer";
// import TaskNavigation from "../components/TaskNavigation";

// export default function Task2Page(props) {
// 	return (
// 		<div id="main-container">
// 			<h1 style={{ flexGrow: 2 }}>Task 2</h1>
// 			<div id="left-and-right-panes-container">
// 				<div id="left-pane-div">
// 					<div id="task-description-div">
// 						<TaskDescription
// 							id="task-description-1"
// 							description={props.taskDescription}
// 							width={600}></TaskDescription>
// 					</div>
// 					<div id="video-player-div">
// 						<VideoPlayer
// 							id="video-player"
// 							videoUrl={props.videoUrl}
// 							width="600px"
// 							height="350px"
// 							onVideoPlay={props.handleVideoPlay}
// 						/>
// 					</div>
// 				</div>
// 				<div id="right-pane-div">
// 					<h5 style={{ marginBottom: "3px" }}>Please type here</h5>
// 					<PropositionsPane
// 						width={420}
// 						height={"50vh"}
// 						rows={5}
// 						cols={35}
// 						options={["sometimes", "usually", "always"]}></PropositionsPane>
// 				</div>
// 			</div>
// 			<div id="task-navigation-div">
// 				<TaskNavigation
// 					handleNavigationButtonClick={
// 						props.handleNavigationButtonClick
// 					}></TaskNavigation>
// 			</div>
// 		</div>
// 	);
// }
