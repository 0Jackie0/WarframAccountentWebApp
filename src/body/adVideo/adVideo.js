import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "./adVideo.css";

// const videoURL = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
// const videoURL = "http://192.168.1.52:28590/api/video/respond";
const videoURL = "http://192.168.1.52:28590/api/video/entity";
// const videoURL = "http://192.168.1.52:28590/api/video/resource";

class AdVideo extends Component
{
    render()
    {
        return (
            <div className="videoArea">
                <button onClick={this.props.close}>Close</button>
                <Player ref={player => {this.player = player;}} playsInline autoPlay src={videoURL}>
                    <ControlBar autoHide={false} />
                </Player>
            </div>
        );
    }
}

export default AdVideo;