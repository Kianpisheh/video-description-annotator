import Task1Page from "./Task1Page";
import Task2Page from "./Task2Page";
import Task3Page from "./Task3Page";
import Task1PagePers1 from "./Task1PagePers1";
import Task2PagePers1 from "./Task2PagePers1";
import Task3PagePers1 from "./Task3PagePers1";
import Task4Page from "./Task4Page";

export default function TaskPage(props) {
	const {
		pers,
		activityUrl,
		activityUrl2,
		activityName,
		activityName2,
		task,
	} = props.task;

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
				<Task2PagePers1
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task2PagePers1>
			);
		} else if (pers === "pers2") {
			const taskDescription =
				"How do you characterize the activity which is performed by the actor in the video? Please write propositions that distinguish this activty from other activities.";
			return (
				<Task2PagePers1
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task2PagePers1>
			);
		}
	} else if (task === "task3") {
		if (pers === "pers3") {
			const taskDescription =
				"How can you distinguish the activity of performed in <b>Video 1</b> from the activity in <b>Video 2</b>? Please wirte propositions that distinguish two activities from each other?";
			return (
				<Task3Page
					videoUrl={activityUrl}
					videoUrl2={activityUrl2}
					taskDescription={taskDescription}
					handleVideoPlay={props.handleVideoPlay}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task3Page>
			);
		} else if (pers === "pers1") {
			const taskDescription = `How can you distinguish the activity ${`"${activityName}"`.bold()} from the activity ${`"${activityName2}"`.bold()}? Please wirte propositions that distinguish two activities from each other?`;
			return (
				<Task3PagePers1
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task3PagePers1>
			);
		} else if (pers === "pers2") {
			const taskDescription = `How can you distinguish the activity ${`"${activityName}"`.bold()} from the activity ${`"${activityName2}"`.bold()}? Please wirte propositions that distinguish two activities from each other?`;
			return (
				<Task3PagePers1
					videoUrl={activityUrl}
					taskDescription={taskDescription}
					handleNavigationButtonClick={
						props.handleNavigationButtonClick
					}></Task3PagePers1>
			);
		}
	} else if (task === "task4") {
		let taskDescriptions = [
			`Please specify the essential 
		objects that are involved in 
		the activity of ${`"${activityName}"`.bold()}.`,
		];
		taskDescriptions.push(`Please specify the essential 
			hand gesture which is required
			to perform the activity of ${`"${activityName}"`.bold()}.`);
		taskDescriptions.push(`Do you think the activity of 
		${`"${activityName}"`.bold()} usually takes
		more than or less than a specific
		time. If yes, please write below.`);
		return (
			<Task4Page
				taskDescriptions={taskDescriptions}
				handleNavigationButtonClick={
					props.handleNavigationButtonClick
				}></Task4Page>
		);
	}
}
