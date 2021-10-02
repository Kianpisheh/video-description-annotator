import prev_btn from "../statics/prev-task-btn.svg";
import next_btn from "../statics/next-task-btn.svg";

export default function TaskNavigation(props) {
    const btnStyle = {
        backgroundColor: "#C6E1EA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        border: "none",
        borderRadius: "10px",
        width: "140px",
        paddingTop: "15px",
        paddingBottom: "15px",
        cursor: "pointer"
    };
    return (
        <div className="task-navigation-container" style={{ display: "flex", gap: "50px" }}>
            <button
                className="prev-task"
                onClick={() => props.handleNavigationButtonClick("prev")}
                style={btnStyle}
            >
                <img id="prev-btn-img" src={prev_btn} alt="."></img> Previous Task
            </button>
            <button
                className="next-task"
                onClick={() => props.handleNavigationButtonClick("next")}
                style={btnStyle}
            >
                Next Task <img id="prev-btn-img" src={next_btn} alt="."></img>
            </button>
        </div>
    );
}
