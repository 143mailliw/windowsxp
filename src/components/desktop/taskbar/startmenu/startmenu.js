import React from 'react';
import StartMenuHeader from "./startmenuheader"
import StartMenuFooter from "./startmenufooter"
import './startmenu.css'

export default class StartMenu extends React.Component {
    render() {
        return (
            <div className = "StartMenu">
                <StartMenuHeader/>
                <div className="StartMenuHighlightRight"/>
                <div className="StartMenuHighlightGradient"/>
                <div className="StartMenuShortcutHolder"/>
                <div className="StartMenuFreqUsedPrograms"/>
                <div className="StartMenuDivider"/>
                <StartMenuFooter/>
            </div>
        );
    }
}