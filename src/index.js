import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// 기본적으로 웹페이지의 화면을 벗어날 때(북마크바나 주소창 등등) 실행되는 function
const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event;
        if(clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave",handle);
        return () => document.removeEventListener("mouseleave",handle);
    }, []);
}

const App = () => {
  const beforeMouse = () => console.log("Good bye");
  useBeforeLeave(beforeMouse);
  return (
  <div className="App">
      <h1>React Hooks useBeforeLeave</h1>
      
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)