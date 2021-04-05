import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({x: window.scrollX, y: window.scrollY});
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
}

const App = () => {
  const { y } = useScroll();
  return (
  <div className="App" style={{  height: "1000vh" }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? "red" : "blue" }}>React Hooks useScroll</h1>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)