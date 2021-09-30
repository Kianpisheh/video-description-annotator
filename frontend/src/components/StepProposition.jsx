import React from "react";

import "./StepProposition.css"

export default class StepProposition extends React.Component {
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
    }

    render() {
        const { rows, cols, data, options, id } = this.props;
        let stepProposition = null;

        stepProposition = (
            <div
                className="step-proposition-container"
                style={{ padding: "10px"}}
            >
                <textarea
                    className="textarea"
                    key={id.toString()}
                    readOnly={!data.selected}
                    ref={this.textAreaRef}
                    rows={data.selected ? rows : 1}
                    cols={cols}
                    placeholder={"type here"}
                    style={{
                        resize: "none",
                        overflow: "hidden",
                        padding: "8px 10px 8px 10px",
                        marginBottom: "15px",
                        fontSize: "16px",
                        lineHeight: data.selected ? "130%" : "180%",
                        borderRadius: "5px",
                        borderColor: "gray",
                        cursor: data.selected ? "text" : "pointer"
                    }}
                    onBlur={(event) => this.props.handleUnselected(parseInt(this.props.id), this.textAreaRef.current.value, event)}
                    onFocus={() =>
                        this.props.handleSelected(
                            parseInt(this.props.id),
                        )
                    }
                ></textarea>
                {options.length ? (
                    <div className="frequency-scale-form-container">
                        <form>
                            <div
                                className="frequency-scale-radio-btn-container"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "60px",
                                }}
                            >
                                {options.map((option, idx) => (
                                    <div
                                        key={`${id.toString()}_${idx}`}
                                        className="scale-radio-btn-div"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <label
                                            id={`radio-btn-label-${option}`}
                                            htmlFor={`radio-btn-${option}`}
                                            style={{ marginBottom: "4px" }}
                                        >
                                            {option}
                                        </label>
                                        <input
                                            id={`radio-btn-${option}`}
                                            type="radio"
                                            name="freqScale"
                                            value={option}
                                            checked={data.freq === option ? true : false}
                                            onClick={() =>
                                                this.props.handleFreqencySelected(
                                                    parseInt(this.props.id),
                                                    idx,
                                                    this.textAreaRef.current.value
                                                )
                                            }
                                            onChange={() => {
                                                const x = 1;
                                            }}
                                        ></input>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                ) : (
                    {}
                )}
            </div>
        );

        return stepProposition;
    }

    componentDidUpdate() {
        this.textAreaRef.current.value = this.props.data.text;
    }

    componentDidMount() {
        this.textAreaRef.current.value = this.props.data.text;
    }
}
