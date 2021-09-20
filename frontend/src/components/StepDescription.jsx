import React from "react";

import "./StepDescription.css";
import close_btn from "../statics/close_btn.svg";
import indent_btn from "../statics/indent_btn.svg";
import outdent_btn from "../statics/outdent_btn.svg";

export default class StepDescription extends React.Component {
    constructor(props) {
        super(props);
        this.textInputRef = React.createRef();
        this.btnsDivRef = React.createRef();
    }

    render() {
        var config = this.getConfig(this.props.item);

        return (
            <div className="description-item-div" id={"description-item_" + this.props.id.toString()} style={config.itemDivStyle}>
                <input
                    id={"description-text_" + this.props.id.toString()}
                    className="description-text"
                    key={this.props.sid}
                    ref={this.textInputRef}
                    type="text"
                    placeholder="type here..."
                    maxLength="50"
                    size="30"
                    autoComplete="off"
                    draggable={true}
                    blur={config.blur}
                    focus={config.focus}
                    autoFocus={config.autofocus}
                    readOnly={config.readOnly}
                    style={config.style}
                    onClick={(event) => this.props.onSingleClick(this.props.id, this.textInputRef.current.value, event)}
                    onKeyDown={(event) => this.props.onKeyPress(this.props.id, this.textInputRef.current.value, event)}
                    onBlur={() => this.props.onBlur(this.props.id, this.textInputRef.current.value)}
                />
                <div className="step-btns-div" ref={this.btnsDivRef}>
                    <button
                        className="outdent-btn"
                        id={"outdent_btn_" + this.props.id.toString()}
                        onClick={(event) => this.props.onKeyPress(this.props.id, "outdent_btn", event)}
                    >
                        <img className="indentation-btn-img" src={outdent_btn} alt="indent"></img>
                    </button>
                    <button
                        className="indent-btn"
                        id={"indent_btn_" + this.props.id.toString()}
                        onClick={(event) => this.props.onKeyPress(this.props.id, "<-", event)}
                    >
                        <img className="indentation-btn-img" src={indent_btn} alt="->"></img>
                    </button>
                    <button
                        className="close-btn"
                        id={"indent_btn_" + this.props.id.toString()}
                        onClick={(event) => this.props.onKeyPress(this.props.id, "close_btn", event)}
                    >
                        <img className="close-btn-img" src={close_btn} alt="X"></img>
                    </button>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        this.textInputRef.current.value = this.props.item.text;
        if (this.props.item.mode === "writing") {
            this.textInputRef.current.focus();
        } else {
            this.textInputRef.current.blur();
        }
    }

    componentDidMount() {
        this.textInputRef.current.value = this.props.item.text;
        if (this.props.item.mode === "writing") {
            this.textInputRef.current.focus();
        } else {
            this.textInputRef.current.blur();
        }
    }

    getConfig(item) {
        const { mode, level } = item;

        let textInputStyle = {};
        let itemDivStyle = {};
        let blur = "false";
        let focus = "true";
        let autofocus = true;
        let readOnly = false;

        if (mode === "writing") {
            textInputStyle = { cursor: "text" };
        } else if (mode === "not_writing") {
            textInputStyle = { cursor: "pointer" };
            blur = "true";
            focus = "false";
            readOnly = true;
            autofocus = false;
        }

        // level-related styling
        textInputStyle.fontSize = 17;
        itemDivStyle.marginLeft = 0;
        itemDivStyle.width = 470;
        itemDivStyle.height = 45;

        if (level === 2) {
            textInputStyle.fontSize = 16;
            itemDivStyle.marginLeft = 60;
            itemDivStyle.width = 420;
            itemDivStyle.height = 40;
        } else if (level === 3) {
            textInputStyle.fontSize = 15;
            itemDivStyle.marginLeft = 110;
            itemDivStyle.width = 395;
            itemDivStyle.height = 35;
        }

        return {
            readOnly: readOnly,
            style: textInputStyle,
            focus: focus,
            blur: blur,
            autofocus: autofocus,
            itemDivStyle: itemDivStyle,
        };
    }
}
