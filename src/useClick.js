import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current){
                element.current.removerEventListener("click", onClick);
            }
        }
    }, []);
    return element;
}

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
  <div className="App">
      <h1 ref={ title }>React Hooks useClick</h1>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)