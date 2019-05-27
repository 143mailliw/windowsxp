import React from 'react';
import DocumentTitle from 'react-document-title';
import './App.css';
import Taskbar from './components/desktop/taskbar/taskbar.js';

const electron = window.require('electron');

const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

function App() {
  return (
    <div className="App">
      <DocumentTitle title="Windows XD"/>
      <Taskbar/>
    </div>
  );
}

export default App;
