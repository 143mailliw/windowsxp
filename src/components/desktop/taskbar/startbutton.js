import React from 'react';
import ReactDOM from 'react-dom'
import './taskbar.css'
import StartLogo from './taskbutton.png'

export default class StartButton extends React.Component {
    state = {
        showingStartMenu: false
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        var startButtonClassName = "StartButton";
        var startButtonHighlightClassName = "StartButtonHighlight";

        if(this.props.showingStartMenu) {
            startButtonClassName = "StartButton StartButtonActive"
            startButtonHighlightClassName = "StartButtonHighlight StartButtonHighlightActive";
        }

        return (
            <div className={startButtonClassName} onClick={this.props.onClick}>
                <div className={startButtonHighlightClassName}/>
                <img src={StartLogo} className="StartButtonImage"></img>
                <span className="StartButtonText">start</span>
            </div>
        );
    }
}