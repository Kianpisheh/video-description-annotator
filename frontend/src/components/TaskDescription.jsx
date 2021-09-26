import React from "react";

function TaskDescription(props) {
    return (
        <div
            className="task-description-div"
            style={{
                width: "100%",
                height: 80,
                alignSelf: "flex-start",
                marginBottom: 100,
                background: "#ECEEF7",
            }}
        >
            <textarea
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
        </div>
    );
}

export default TaskDescription;
