import React from "react";

import "./Task4Page.css";

import PropositionsPane from "../components/PropositionsPane";
import TaskNavigation from "../components/TaskNavigation";
import TaskDescription from "../components/TaskDescription";

export default function Task4Page(props) {
	return (
		<div id="main-container">
			<h1>Task 4</h1>
			<div id="panes-container">
				{props.taskDescriptions.map((taskDescription, index) => (
					<div className="single-pane-container">
						<div className="description-container">
							<p style={{ margin: 0 }}>
								<b>Task description (please read carefully)</b>
							</p>
							<TaskDescription
								id="task-description-1"
								description={taskDescription}
								width={420}></TaskDescription>
						</div>
						<PropositionsPane
							key={index}
							id={index}
							width={420}
							height={"45vh"}
							rows={5}
							cols={35}
							options={["sometimes", "usually", "always"]}
							handleNewData={props.handleNewData}></PropositionsPane>
					</div>
				))}
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
