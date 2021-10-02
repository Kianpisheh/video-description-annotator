import Task1Page from "./Task1Page";
import Task2Page from "./Task2Page";
import Task1PagePers1 from "./Task1PagePers1";

export default function TaskPage(props) {
	const { pers, activityUrl, activityName, task } = props.task;

	if (task === "task1") {
		if (pers === "pers3") {
			// task description
			const taskDescription =
				"Please describe the activity which is performed in the video in terms of the steps that are taken by the actor to acomplish the activity?";
			return (
				<Task1Page
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task1Page>
			);
		} else if (pers === "pers1") {
			const taskDescription = `Please describe the activity of ${`"${activityName}"`.bold()} in terms of the steps that you take to acomplish the activity in your daily life?`;
			return (
				<Task1PagePers1
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task1PagePers1>
			);
		} else if (pers === "pers2") {
			const taskDescription = `How do you describe the activity of ${`"${activityName}"`.bold()} to someone else in terms of the steps that he/she needs to take?`;
			return (
				<Task1PagePers1
					taskDescription={taskDescription}
					videoUrl={activityUrl}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task1PagePers1>
			);
		}
	} else if (task === "task2") {
		if (pers === "pers3") {
			const taskDescription =
				"How do you characterize the activity which is performed by the actor in the video? Please write propositions that distinguish this activty from other activities.";
			return (
				<Task2Page
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task2Page>
			);
		} else if (pers === "pers1") {
			const taskDescription =
				"How do you characterize the activity which is performed by the actor in the video? Please write propositions that distinguish this activty from other activities.";
			return (
				<Task2Page
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task2Page>
			);
		} else if (pers === "pers2") {
			const taskDescription =
				"How do you characterize the activity which is performed by the actor in the video? Please write propositions that distinguish this activty from other activities.";
			return (
				<Task2Page
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task2Page>
			);
		}
	}
}
