import React from "react";
import StepProposition from "./StepProposition";

export default class DescriptionPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = { propositions: [{ key: 0, selected: true, text: "", freq: null }] };
        this.counter = 1;

        this.handleFreqencySelected = this.handleFreqencySelected.bind(this);
        this.handlePropositionSelected = this.handlePropositionSelected.bind(this);
        this.handlePropositionUnselected = this.handlePropositionUnselected.bind(this);
        this.getIndex = this.getIndex.bind(this);
    }

    render() {
        const { rows, cols, options } = this.props;

        return (
            <div id="proposition-pane-cantainer">
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
                <AddButton></AddButton>
            </div>
        );
    }


    handleFreqencySelected(propositionKey, optionIdx, text) {
        let propositions = [...this.state.propositions];
        const idx = this.getIndex(propositions, propositionKey);
        for (let i = 0; i < propositions.length; i++) {
            if (i === idx) {
                propositions[i].freq =  this.props.options[optionIdx];   
                propositions[i].text = text;
                propositions[i].selected = false; 
            }
               
        }
        this.setState({propositions: propositions})
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
        this.setState({propositions: propositions})
    }

    // get called onBLur
    handlePropositionUnselected(propositionKey, text) {
        let propositions = [...this.state.propositions];
        const idx = this.getIndex(propositions, propositionKey);
        for (let i = 0; i < propositions.length; i++) {
            if (i === idx) {
                propositions[i].selected = false; 
                propositions[i].text = text;
            } 
        }
        this.setState({propositions: propositions})
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

}

function AddButton(props) {
    return <button>
        <img className="indentation-btn-img" src={indent_btn} alt="->"></img>
    </button>
}
