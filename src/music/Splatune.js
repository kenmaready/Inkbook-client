import React, { Component } from "react";
import PlayCircleIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleIcon from "@material-ui/icons/PauseCircleOutline";
import "./styles.css";

export class Splatune extends Component {
    constructor() {
        super();
        this.state = {
            playing: false,
        };
    }

    playAudio = () => {
        const music = document.getElementsByClassName("music")[0];
        if (!this.state.playing) {
            music.play();
            this.setState({ playing: true });
        } else {
            music.pause();
            this.setState({ playing: false });
        }
    };

    render() {
        return (
            <div className="audioControl">
                {!this.state.playing ? (
                    <PlayCircleIcon onClick={this.playAudio} size="large" />
                ) : (
                    <PauseCircleIcon onClick={this.playAudio} size="large" />
                )}
                <audio className="music">
                    <source src="./music/now_or_never.mp3"></source>
                </audio>
            </div>
        );
    }
}

export default Splatune;
