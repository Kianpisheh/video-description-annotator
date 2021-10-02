import "./Task1PagePers1.css";

import DescriptionPane from "../components/DescriptionPane";
import TaskDescription from "../components/TaskDescription";
import TaskNavigation from "../components/TaskNavigation";

export default function Task1Page(props) {
	return (
		<div id="main-container">
			<div id="main-pane">
				<h1 id="page-title">Task 1</h1>
				<div id="task-description-div">
					<TaskDescription
						id="task-description-1"
						description={props.taskDescription}
						width={550}
					/>
				</div>
				<div id="description-pane">
					<h5 style={{ marginBottom: "3px", alignSelf: "flex-start" }}>
						Please type here
					</h5>
					<DescriptionPane id="description-pane" width={550} height={"50vh"} />
				</div>
				<div id="task-navigation-div">
					<TaskNavigation
						handleNavigationButtonClick={
							props.handleNavigationButtonClick
						}></TaskNavigation>
				</div>
			</div>
		</div>
	);
}
