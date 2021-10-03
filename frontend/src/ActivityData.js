export default function getStudyData(participant, taskNum) {
	const videoList = ["https://youtu.be/5B5HnzSvCaw", "https://youtu.be/bfF4PATuQ0s"];
	const activityList = ["washing dishes", "coffee making"];

	const taskSequence = {
		p1: [
			{ video: 0, pers: "pers1", task: "task1" },
			{ video: 1, pers: "pers2", task: "task1" },
			{ video: 0, pers: "pers3", task: "task1" },
			{ video: 0, pers: "pers1", task: "task2" },
			{ video: 1, pers: "pers2", task: "task2" },
			{ video: 0, pers: "pers3", task: "task2" },
			{ video: 0, video2: 1, pers: "pers2", task: "task3" },
			{ video: 1, video2: 0, pers: "pers1", task: "task3" },
			{ video: 0, video2: 1, pers: "pers3", task: "task3" },
			{ video: 0, task: "task4" },
		],
		p2: [
			{ video: 1, pers: "pers2", task: "task1" },
			{ video: 0, pers: "pers1", task: "task1" },
			{ video: 1, pers: "pers3", task: "task1" },
			{ video: 1, pers: "pers2", task: "task2" },
			{ video: 0, pers: "pers1", task: "task2" },
			{ video: 1, pers: "pers3", task: "task2" },
			{ video: 1, video2: 0, pers: "pers2", task: "task3" },
			{ video: 0, video2: 1, pers: "pers1", task: "task3" },
			{ video: 1, video2: 0, pers: "pers3", task: "task3" },
			{ video: 1, task: "task4" },
		],
	};

	let userTaskSequence = taskSequence[participant.toLowerCase()];

	if (userTaskSequence == null) userTaskSequence = taskSequence["p1"];
	// return the first one
	if (taskNum < 0) taskNum = 0;
	// return the last one
	else if (taskNum > userTaskSequence.length - 1) taskNum = userTaskSequence.length - 1;

	console.log(userTaskSequence, taskNum);

	const task = userTaskSequence[taskNum];

	task.activityUrl = videoList[task["video"]];
	task.activityUrl2 = videoList[task["video2"]];
	task.activityName = activityList[task["video"]];
	task.activityName2 = activityList[task["video2"]];
	return [task, userTaskSequence.length];
}
