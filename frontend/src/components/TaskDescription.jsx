import React, { useRef, useEffect } from "react";

function TaskDescription(props) {

    const firstPart = props.description.split('<b>')[0];
    const activityName = props.description.split("<b>")[1]?.split("</b>")[0]
    const secondPart = props.description.split('</b>')[1];

    return (
        <React.Fragment>
            <div id="task-description-inner-div" style={{ display: "flex", flexDirection: "column", }}>
                <p style={{ margin: 0 }}><b>Task description (please read carefully)</b></p>
                <p
                    style={{
                        wordWrap: "break-word",
                        boxSizing: "border-box",
                        resize: "none",
                        height: "auto",
                        width: props.width,
                        fontSize: 18,
                        padding: 20,
                        background: "#ECEEF7",
                        borderRadius: 5,
                        borderColor: "#2DB9F8",
                        color: "#222222",
                        lineHeight: 1.5
                    }}
                >
                    {firstPart} <b>{activityName}</b> {secondPart}
                </p>
            </div>
        </React.Fragment>
    );
}

export default TaskDescription;

