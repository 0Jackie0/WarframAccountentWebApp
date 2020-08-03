import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "./adVideo.css";

// const videoURL = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
const videoURL = "http://192.168.1.52:28590/api/video";

// const videoURL = "http://192.168.1.52:28590/api/video/respond";

class AdVideo extends Component
{
    replayVideo = ()=>
    {
        this.player.seek(0);
        this.player.play();
    }

    render()
    {
        return (
            <div className="videoArea">
                <button onClick={this.props.close}>Close</button>
                <Player ref={player => {this.player = player;}} playsInline autoPlay src={videoURL} onEnded={this.replayVideo}>
                    <ControlBar autoHide={true} />
                </Player>
            </div>
        );
    }
}

export default AdVideo;