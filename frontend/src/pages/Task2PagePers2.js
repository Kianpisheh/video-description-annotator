import "./Task2PagePers1.css";

import PropositionsPane from "../components/PropositionsPane";
import TaskDescription from "../components/TaskDescription";
import TaskNavigation from "../components/TaskNavigation";

export default function Task2PagePers2(props) {
	return (
		<div id="main-container">
			<div id="main-pane">
				<h1 id="page-title">Task 2</h1>
				<div id="task-description-div">
					<p style={{ margin: 0 }}>
						<b>Task description (please read carefully)</b>
					</p>
					<TaskDescription
						id="task-description-1"
						description={props.taskDescription}
						width={550}></TaskDescription>
				</div>
				<div id="description-pane">
					<h4 style={{ marginBottom: "3px" }}>Please type here</h4>
					<PropositionsPane
						rows={5}
						cols={35}
						width={420}
						height={"50vh"}
						handleNewData={props.handleNewData}
						options={["sometimes", "usually", "always"]}></PropositionsPane>
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
