import React from "react";

function TaskDescription(props) {
    return (
        <React.Fragment>
            <h5 style={{ marginBottom: "3px" }}>Task description</h5>
            <textarea
                readOnly
                rows={8}
                style={{
                    wordWrap: "break-all",
                    boxSizing: "border-box",
                    resize: "none",
                    width: "100%",
                    height: "100%",
                    fontSize: 17,
                    padding: 10,
                    background: "#ECEEF7",
                    borderRadius: 5,
                    borderColor: "#2DB9F8",
                    color: "#434548"
                }}
            >
                {props.description}
            </textarea>
        </React.Fragment>
    );
}

export default TaskDescription;
