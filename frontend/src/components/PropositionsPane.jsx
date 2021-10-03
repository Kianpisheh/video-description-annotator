import React from "react";
import StepProposition from "./StepProposition";

import add_btn from "../statics/add_btn.svg";
import StudyDataContext from "../contexts/StudyDataContext";

export default class DescriptionPane extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();

        this.handleFreqencySelected = this.handleFreqencySelected.bind(this);
        this.handlePropositionSelected = this.handlePropositionSelected.bind(this);
        this.handlePropositionUnselected = this.handlePropositionUnselected.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);

        this.createProposition = this.createProposition.bind(this);
        this.removeEmptyProposition = this.removeEmptyProposition.bind(this);
        this.getIndex = this.getIndex.bind(this);

        this.counter = 0;
        this.state = { propositions: [this.createProposition(this.counter)] };
    }

    static contextType = StudyDataContext;


    render() {
        const { rows, cols, options, height, width } = this.props;

        return (
            <div
                id="proposition-pane-cantainer"
                ref={this.containerRef}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "10px",
                    boxShadow: "1px 3px 8px #c9c9c9be",
                    width: width,
                    height: height,
                    overflow: "auto",
                }}
            >
                {this.state.propositions.map((proposition) => (
                    <StepProposition
                        key={proposition.key.toString()}
                        id={proposition.key.toString()}
                        rows={rows}
                        cols={cols}
                        options={options}
                        data={proposition}
                        handleFreqencySelected={this.handleFreqencySelected}
                        handleSelected={this.handlePropositionSelected}
                        handleUnselected={this.handlePropositionUnselected}
                    ></StepProposition>
                ))}
                <AddButton handleClick={this.handleAddButtonClick}></AddButton>
            </div>
        );
    }

    componentDidUpdate() {
        this.containerRef.current.scrollTop = this.containerRef.current.scrollHeight;
    }



    handleFreqencySelected(propositionKey, optionIdx, text) {
        if (text === "") return

        let propositions = [...this.state.propositions];
        const idx = this.getIndex(propositions, propositionKey);
        for (let i = 0; i < propositions.length; i++) {
            if (i === idx) {
                propositions[i].freq = this.props.options[optionIdx];
                propositions[i].text = text;
                propositions[i].selected = false;
            }
        }
        let { task, user, sessionTime } = this.context;
        task.task4idx = this.props.id;
        this.props.handleNewData({ propositions: propositions, user: user, sessionTime: sessionTime, task: task })
        this.setState({ propositions: propositions });
    }

    // get called onFocus
    handlePropositionSelected(propositionKey) {
        let propositions = [...this.state.propositions];
        const idx = this.getIndex(propositions, propositionKey);
        for (let i = 0; i < propositions.length; i++) {
            propositions[i].selected = false;
            if (i === idx) {
                propositions[i].selected = true;
            }
        }
        let { task, user, sessionTime } = this.context;
        task.task4idx = this.props.id;
        this.props.handleNewData({ propositions: propositions, user: user, sessionTime: sessionTime, task: task })
        this.setState({ propositions: propositions });
    }

    // get called onBLur
    handlePropositionUnselected(propositionKey, text, event) {
        let propositions = [...this.state.propositions];
        const idx = this.getIndex(propositions, propositionKey);
        propositions[idx].selected = false;
        propositions[idx].text = text;
        propositions = this.removeEmptyProposition(propositions, false);

        // do not update the states if the add-buton or a radio button is clicked
        if (event.relatedTarget) {
            let tid = event.relatedTarget.id;
            if (tid === "add-btn" || tid.slice(0, 9) === "radio-btn") {
                return
            }
        }
        let { task, user, sessionTime } = this.context;
        task.task4idx = this.props.id;
        this.props.handleNewData({ propositions: propositions, user: user, sessionTime: sessionTime, task: task })
        this.setState({ propositions: propositions });
    }

    handleAddButtonClick() {
        let propositions = [...this.state.propositions];
        if (propositions[propositions.length - 1].text === "") return

        propositions = this.removeEmptyProposition(propositions, false);
        propositions.push(this.createProposition(this.counter));

        let { task, user, sessionTime } = this.context;
        task.task4idx = this.props.id;
        this.props.handleNewData({ propositions: propositions, user: user, sessionTime: sessionTime, task: task })
        this.setState({ propositions: propositions });
    }

    removeEmptyProposition(propositions, lastItem) {
        if (propositions.length < 2) return propositions;

        const j = lastItem ? 0 : 1;
        let items = [];
        // ignor the last one
        for (let i = 0; i < propositions.length - j; i++) {
            if (propositions[i].text !== "") {
                items.push(propositions[i]);
            }
        }

        return propositions;
    }

    getIndex(propositions, propositionKey) {
        let items = [...propositions];
        let itemIndex = items
            .map((proposition) => proposition.key)
            .indexOf(propositionKey);
        if (itemIndex >= 0) {
            return itemIndex;
        }
        return -1;
    }

    createProposition(keyNum) {
        this.counter += 1;
        return { key: keyNum, selected: true, text: "", freq: null };
    }
}

function AddButton(props) {
    return (
        <React.Fragment>
            <button
                id="add-btn"
                style={{
                    border: "none",
                    cursor: "pointer",
                    width: "auto",
                    height: "auto",
                    backgroundColor: "transparent",
                    marginTop: "10px",
                }}
                onClick={props.handleClick}
            >
                <img id="add-btn-img" src={add_btn} alt="+"></img>
            </button>
        </React.Fragment >
    );
}
