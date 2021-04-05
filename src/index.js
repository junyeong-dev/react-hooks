import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useFullscreen = () => {
    const element = useRef();
    const triggerFullScreen = () => {
        console.log("trigger");

        if(element.current) {
            element.current.requestFullscreen();
        }
    }
    return { element, triggerFullScreen };
}

const App = () => {
  const { element, triggerFullScreen } = useFullscreen();
  return (
  <div className="App" style={{ height: "1000vh" }}>
      <h1>React Hooks useFullscreen</h1>
      <img ref={ element } src="https://cdn.pixabay.com/photo/2018/06/10/13/41/rice-terraces-3466518_960_720.jpg" />
      <button onClick={ triggerFullScreen }>Fullscreen</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)