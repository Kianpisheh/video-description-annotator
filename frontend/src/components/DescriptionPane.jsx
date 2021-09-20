import React from "react";


import "./DescriptionPane.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import StepDescription from "./StepDescription";
import { sendDataToServer } from "../apiCalls"

export default class DescriptionPane extends React.Component {
	constructor(props) {
		super(props);
		this.counter = 0;
		this.sessionTime = ""
		this.state = {
			descriptions: [{ key: 0, mode: "writing", level: 1, selected: true, text: "" }],
		};
		this.counter += 1;

		this.setModeByKey = this.setModeByKey.bind(this);
		this.getMode = this.getMode.bind(this);
		this.addStepAfter = this.addStepAfter.bind(this);
		this.removeWritingStep = this.removeWritingStep.bind(this);
		this.getSelected = this.getSelected.bind(this);
		this.getWritingStep = this.getWritingStep.bind(this);
		this.deselectAll = this.deselectAll.bind(this);
		this.getIndex = this.getIndex.bind(this);
		this.getWritingIndex = this.getWritingIndex.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.updateDescendents = this.updateDescendents.bind(this);
		this.getDescendents = this.getDescendents.bind(this);
		this.deleteItems = this.deleteItems.bind(this);
		this.getPrevSibling = this.getPrevSibling.bind(this);
		this.groupDescriptions = this.groupDescriptions.bind(this);
		this.getSessionTime = this.getSessionTime.bind(this);

		this.handleSingleClick = this.handleSingleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleKeyAction = this.handleKeyAction.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);
	}

	render() {

		if (this.counter === 2) {
			this.sessionTime = this.getSessionTime();
		}

		let descriptionListG = this.groupDescriptions([...this.state.descriptions]);

		let stepComponentsList = descriptionListG.map((stepList, index) => (
			<Draggable draggableId={index.toString()} key={index.toString()} index={index}>
				{(provided) => (<div key={index.toString()} id={index.toString()} className="step-div" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					{stepList.map((item, index) => (
						<StepDescription
							id={item.key.toString()}
							key={item.key.toString()}
							onSingleClick={this.handleSingleClick}
							onDoubleClick={this.handleDoubleClick}
							onBlur={this.handleBlur}
							onKeyPress={this.handleKeyAction}
							item={item}
						/>
					))}
				</div>)}
			</Draggable>
		));

		return <DragDropContext onDragEnd={this.handleDragEnd}>
			<Droppable droppableId="description-pane-droppable" >
				{(provided) => (<div id="description-pane-container" ref={provided.innerRef} {...provided.droppableProps}>{stepComponentsList}{provided.placeholder}</div>)}
			</Droppable>
		</DragDropContext>

	}

	componentDidUpdate(prevProps) {
		if (prevProps.videoID !== this.props.videoID) {
			this.setState({descriptions: [{ key: 0, mode: "writing", level: 1, selected: true, text: "" }]});
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleWindowResize)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowResize)
	}

	handleWindowResize() {
		// const windowWidth = window.innerWidth;
		// const windowHeight = window.innerHeight;
		// if (windowWidth < 1600) {
		//     let paneContainer = document.getElementById("description-pane-container");
		// 	paneContainer.style.width = 490;
		// } else {
		// 	let paneContainer = document.getElementById("description-pane-container");
		// 	paneContainer.style.width = 550;
		// }

		// console.log("width: ", windowWidth);
		// console.log("height: ", windowHeight);
	}

	getSessionTime() {
		let d = new Date();
		const sessionTime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
		return sessionTime;
	}

	groupDescriptions(descriptions) {
		let descriptionListG = [];
		let stepDescriptionList = [];
		for (let i = 0; i < descriptions.length; i++) {
			// new step
			if (descriptions[i].level === 1) {
				if (stepDescriptionList.length) {
					descriptionListG.push(stepDescriptionList);
				}
				stepDescriptionList = [descriptions[i]];
			} else {
				// descendents
				stepDescriptionList.push(descriptions[i]);
			}
			if (i === descriptions.length - 1) {
				if (stepDescriptionList.length) {
					descriptionListG.push(stepDescriptionList);
				}
			}
		}

		return descriptionListG;
	}

	handleDragEnd(result) {
		if (result.destination == null) return;
		if (result.destination.index === result.source.index) return;

		let items = [...this.state.descriptions];
		// step-set level index
		const sourceStepIndex = result.source.index;
		const destinationStepIndex = result.destination.index;

		let steps = this.groupDescriptions(items);
		let destinationOffset = destinationStepIndex > sourceStepIndex ? 1 : 0;
		let sourceOffset = destinationStepIndex > sourceStepIndex ? 0 : 1;

		// move a copy of source step into the new location
		steps.splice(destinationStepIndex + destinationOffset, 0, steps[sourceStepIndex]);
		// remove the old copy of source step
		steps.splice(sourceStepIndex + sourceOffset, 1);
		sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
		this.setState({ descriptions: steps.flat() });
	}

	handleSingleClick(key, txt) {
		let items = [...this.state.descriptions];
		if (txt !== "") {
			let index = this.getIndex(items, key, 0);
			const oldWritingIndex = this.getWritingIndex(items);
			if (oldWritingIndex >= 0) {
				items[oldWritingIndex].mode = "not_writing";
			}
			items[index].mode = "writing";
			items = this.deselectAll(items);
			items[index].selected = true;
			this.setState({ descriptions: items });
		}
	}

	handleBlur(key, txt) {
		let items = [...this.state.descriptions];
		if (txt !== "") {
			const index = this.getIndex(items, key, 0);
			items[index].mode = "not_writing";
			items[index].text = txt;
		} else if (txt === "" && items.length > 1) {
			items = this.removeWritingStep(items);
		}
		//sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
		this.setState({ descriptions: items });
	}

	handleKeyAction(key, txt, event) {
		let items = [...this.state.descriptions];

		// del --> delete step
		if (event.which === 46 || (event.type === 'click' && txt === 'close_btn')) {
			let currentStepIndex = null;
			if (key === null) {
				// delete (window listener)
				currentStepIndex = this.getSelected(items);
			} else {
				// delete (<input> listener)
				currentStepIndex = this.getIndex(items, key, 0);
			}

			if ((items[currentStepIndex].selected || (event.type === 'click' && txt === 'close_btn')) && items.length >= 2) {
				// select the previous/next step
				items = this.deselectAll(items);
				const descIndexList = this.getDescendents(items, currentStepIndex);
				if (currentStepIndex === 0) {
					items[currentStepIndex + descIndexList.length].selected = true;
				} else {
					const prevSiblingIndex = this.getPrevSibling(items, currentStepIndex);
					let offset = 1;
					if (!(prevSiblingIndex == null)) {
						const prevStepDescIndexList = this.getDescendents(
							items,
							prevSiblingIndex
						);
						offset = prevStepDescIndexList.length;
					}
					items[currentStepIndex - offset].selected = true;
				}
				// do not delete everything
				if (descIndexList.length < items.length) {
					items = this.deleteItems(items, descIndexList);
					sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
					this.setState({ descriptions: items });
				}
			}
		}


		// Enter --> nex step (writing)
		else if (event.which === 13 && txt !== "") {
			const currentStepMode = this.getMode(items, key, 0);
			const curretnStepIndex = this.getIndex(items, key, 0);
			let newStepIndex = curretnStepIndex;
			if (
				currentStepMode === "writing" ||
				(currentStepMode === "not_writing" && items[curretnStepIndex].selected)
			) {
				// change the current step to non-writing and add one writing step after it
				items[curretnStepIndex].mode = "not_writing";
				items[curretnStepIndex].text = txt;
				// select the current step
				items = this.deselectAll(items);
				[items, newStepIndex] = this.addStepAfter(items, key, "writing", null);
				items[newStepIndex].selected = true;
				items[newStepIndex].mode = "writing";
				sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
				this.setState({ descriptions: items });
			}
		}

		// Tab or Shift + Tab
		else if (event.which === 9 || event.type === "click") {
			event.preventDefault();
			// perform indention if it is writing
			const currentStepIndex = this.getIndex(items, key, 0);

			if (currentStepIndex > 0) {
				const descIndexList = this.getDescendents(items, currentStepIndex);
				// only tab
				if (!event.shiftKey || txt === "indent_btn") {
					if ((items[currentStepIndex].mode === "writing" || txt === "indent_btn") && items.length > 1) {
						if (
							items[currentStepIndex - 1].level >=
							items[currentStepIndex].level &&
							items[currentStepIndex].level <= 2
						) {
							items[currentStepIndex].level += 1;
							items = this.updateDescendents(
								items,
								descIndexList,
								"level_increase"
							);
							sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
							this.setState({ descriptions: items });
						}
					}
				} if (event.shiftKey || txt === "outdent_btn") {
					// shift + tab
					if (items[currentStepIndex].level >= 2) {
						items[currentStepIndex].level -= 1;
						items = this.updateDescendents(
							items,
							descIndexList,
							"level_decrease"
						);
						sendDataToServer(items, this.sessionTime, this.props.videoID, this.props.user);
						this.setState({ descriptions: items });
					}
				}
			}
		}

		// down
		else if (event.which === 40) {
			items = [...this.state.descriptions];
			const oldIndex = this.getIndex(items, key, 0);

			// can't go down
			if (oldIndex === items.length - 1) {
				this.setState({ descriptions: items });
				return;
			}

			// update the selected item
			if (txt !== "") { // keep the old item
				items[oldIndex].text = txt;
				items[oldIndex].selected = false;
				items[oldIndex].mode = "not_writing";

				// select the new item
				items[oldIndex + 1].selected = true;
				items[oldIndex + 1].mode = "writing";

			} else { // must be removed
				items = this.removeItem(items, oldIndex);

				// select the new item
				items[oldIndex].selected = true;
				items[oldIndex].mode = "writing";
			}
			this.setState({ descriptions: items });
		}

		// up
		else if (event.which === 38) {
			items = [...this.state.descriptions];
			const oldIndex = this.getIndex(items, key, 0);

			// can't go up
			if (oldIndex === 0) {
				this.setState({ descriptions: items });
				return;
			}

			// update the selected item
			if (txt !== "") { // keep the old item
				items[oldIndex].text = txt;
				items[oldIndex].selected = false;
				items[oldIndex].mode = "not_writing";

				// select the new item
				items[oldIndex - 1].selected = true;
				items[oldIndex - 1].mode = "writing";

			} else { // must be removed
				items = this.removeItem(items, oldIndex);

				// select the new item
				items[oldIndex - 1].selected = true;
				items[oldIndex - 1].mode = "writing";
			}
			this.setState({ descriptions: items });
		}

		else if (event.which === 40 || event.which === 38) {
			items = [...this.state.descriptions];
			const oldIndex = this.getIndex(items, key, 0);

			if (oldIndex === items.length - 1 && event.which === 40) return;
			if (oldIndex === 0 && event.which === 38) return;

			// take care of the old selected item
			let oldItemIsRemoved = false;
			if (txt === "") {
				if (items.length > 1) { // should be  deleted
					items = this.removeItem(items, oldIndex);
					oldItemIsRemoved = true;
				} else {
					return; // length = 0 --> you cannot go to another item
				}
			} else {
				items[oldIndex].text = txt;
				items[oldIndex].selected = false;
				items[oldIndex].mode = "not_writing";
			}

			// selected the new item (already know that items.length > 1)
			let newIndex = oldIndex;
			if (event.which === 40) {  // down
				if (!oldItemIsRemoved && oldIndex < items.length - 1) {
					newIndex = oldIndex + 1;
				}
			} else { // up
				if (oldIndex > 0)
					newIndex = oldIndex - 1;
			}
			items = this.deselectAll(items);
			items[newIndex].selected = true;
			items[newIndex].mode = "writing";
			this.setState({ descriptions: items });
		}
	}

	// TODO:
	// 4) add guiddance (key bindings, ...)
	// 5) record timestamp
	// 6) record video control events (number of times, and types (jump to the future/past))

	getIndex(stateItems, descriptionKey, offset) {
		let items = [...stateItems];
		let itemIndex = items
			.map((item) => item.key)
			.indexOf(parseInt(descriptionKey));
		if (itemIndex >= 0) {
			return itemIndex + offset;
		}
		return -1;
	}

	getWritingIndex(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].mode === "writing") {
				return i;
			}
		}
		return -1;
	}

	setModeByKey(stateItems, descriptionKey, mode) {
		let items = [...stateItems];
		let itemIndex = items
			.map((item) => item.key)
			.indexOf(parseInt(descriptionKey));
		if (itemIndex >= 0) {
			items[itemIndex].mode = mode;
		} else {
			console.log("step description does not exist");
		}

		return items;
	}

	getMode(stateItems, descriptionKey, offset) {
		let items = [...stateItems];
		let itemIndex = items
			.map((item) => item.key)
			.indexOf(parseInt(descriptionKey));
		if (items[itemIndex + offset] !== undefined) {
			return items[itemIndex + offset].mode;
		}
		return undefined;
	}

	getSelected(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].selected) {
				return i;
			}
		}
		return -1;
	}

	getWritingStep(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].mode === "writing") {
				return i;
			}
		}
		return -1;
	}

	deselectAll(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].selected) {
				items[i].selected = false;
			}
		}
		return items;
	}

	addStepAfter(itemsState, key, mode, level) {
		let items = [...itemsState];
		let itemIndex = items.map((item) => item.key).indexOf(parseInt(key));
		// add the new step
		let mLevel = level;
		if (level === null) {
			mLevel = items[itemIndex].level;
		}
		const descIndexList = this.getDescendents(items, itemIndex);
		let newItemIndex = descIndexList[descIndexList.length - 1] + 1;
		items.splice(newItemIndex, 0, {
			key: this.counter,
			mode: mode,
			level: mLevel,
			selected: true,
			text: ""
		});
		this.counter += 1;

		return [items, newItemIndex];
	}

	removeWritingStep(itemsState) {
		let items = [...itemsState];
		let newItems = [...items];
		for (let i = 1; i < items.length; i++) {
			if (items[i].mode === "writing") {
				newItems.splice(i, 1);
				return newItems;
			}
		}
		console.log("Didn't find the item, to remove");
		return newItems;
	}

	removeItem(items, index) {
		items.splice(index, 1);
		return items;
	}

	getDescendents(items, index) {
		let descIndexList = [index];
		const currentStepLevel = items[index].level;
		for (let i = index + 1; i < items.length; i++) {
			if (items[i].level > currentStepLevel) {
				descIndexList.push(i);
			} else {
				break;
			}
		}
		return descIndexList;
	}

	updateDescendents(items, desIndexList, action) {
		for (let i = 1; i < desIndexList.length; i++) {
			if (action === "level_increase") {
				items[desIndexList[i]].level += 1;
			} else if (action === "level_decrease") {
				items[desIndexList[i]].level -= 1;
			}
		}

		return items;
	}

	deleteItems(items, indexList) {
		let newItems = [];
		items.forEach((item, index) => {
			if (!indexList.includes(index)) {
				newItems.push(item);
			}
		});
		return newItems;
	}

	getPrevSibling(items, index) {
		// pre-condition: index > 0
		for (let i = index - 1; i > 0; i--) {
			if (items[i].level < items[index].level) {
				return null;
			}
			if (items[index].level === items[i].level) {
				return i;
			}
		}
		return null;
	}

	saveUserData(descriptions, fileName) {
		//const descriptionsJson = JSON.stringify(descriptions);
	}
}
