import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCallBack = isFull => {
        if(callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFullScreen = () => {
        console.log("trigger");

        if(element.current) {
            element.current.requestFullscreen();
            if(callback && typeof callback === "function") {
                runCallBack(true);
            }
        }
    };
    const exitFull = () => {
        if(callback && typeof callback === "function") {
            document.exitFullscreen();
            runCallBack(false);
        }
    };
    return { element, triggerFullScreen, exitFull };
}

const App = () => {
  const [fullCheck, setFullCheck] = useState(false);
  const onFullScreen = (isFull) => {
    setFullCheck(isFull);
  }
  const { element, triggerFullScreen, exitFull } = useFullscreen(onFullScreen);
  return (
  <div className="App" style={{ height: "1000vh" }}>
      <h1>React Hooks useFullscreen</h1>
      <div ref={ element }>
        <img src="https://cdn.pixabay.com/photo/2018/06/10/13/41/rice-terraces-3466518_960_720.jpg" />
        <button onClick={ fullCheck && exitFull  }>Exit Fullscreen</button>
      </div>
      <button onClick={ triggerFullScreen }>Fullscreen</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)