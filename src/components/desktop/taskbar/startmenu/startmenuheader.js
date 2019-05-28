import React from 'react';
import './startmenu.css'

export default class StartMenuHeader extends React.Component {
    render() {
      return (
        <div className = "StartMenuHeader">
            <div className="StartMenuHeaderCorner"/>
            <div className="StartMenuHeaderHighlightRight"/>
        </div>
      );
    }
}