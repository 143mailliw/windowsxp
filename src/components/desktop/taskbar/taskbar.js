import React from 'react';
import NotificationTray from "./notificationtray"
import StartButton from "./startbutton"
import StartMenu from "./startmenu/startmenu"
import './taskbar.css'

export default class Taskbar extends React.Component {
    state = {
        showingStartMenu: false
    }

    handleClick = () => {
        this.setState({
            showingStartMenu: !this.state.showingStartMenu
        });
    };

    render() {
        return (
            <div className="Taskbar">
                {this.state.showingStartMenu &&
                        <StartMenu/>
                }
                <StartButton onClick={this.handleClick} showingStartMenu={this.state.showingStartMenu}/>
                <NotificationTray/>
            </div>
        );
    }
}