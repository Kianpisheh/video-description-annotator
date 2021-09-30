import VideoPlayer from "../components/VideoPlayer"
import DescriptionPane from "../components/DescriptionPane"


export default function Task1Page() {
    return (
        <div id="main-container">
            <div id="player-container">
                <TaskDescription id="task-description-1" description={taskDescription1} />
                <VideoPlayer
                    id="video-player"
                    width="600px"
                    height="350px"
                    onVideoPlay={this.handleVideoPlay}
                />
            </div>
            <DescriptionPane
                id="description-pane"
                videoID={this.state.videoId}
                user={this.user}
            />
        </div>
    );
}
