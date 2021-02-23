import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// 정확히 말하면 useConfirm은 hook은 아님
const useConfirm = (message = "", callback, rejectionConfirm) => {
    if(typeof callback !== "function"){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            callback();
        } else {
            rejectionConfirm();
        }
    }
    return confirmAction;
} 

const App = () => {
  const checkConfirm = () => console.log("useConfirm");
  const rejectionConfirm = () => console.log("rejection");
  const confirmFunction = useConfirm("This is useConfirm", checkConfirm, rejectionConfirm);
  return (
  <div className="App">
      <h1>React Hooks useConfirm</h1>
      <button onClick={ confirmFunction }>useConfirm</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)