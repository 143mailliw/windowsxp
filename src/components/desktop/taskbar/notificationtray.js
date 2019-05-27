import React from 'react';
import Clock from 'react-live-clock';
import './taskbar.css'

export default class NotificationTray extends React.Component {
    render() {
      return (
        <div className = "NotificationTray">
            <div className="NotificationTrayHighlightUpper"/>
            <div className="NotificationTrayHighlightLeft"/>
            <Clock format="h:mm A"/>
        </div>
      );
    }
}