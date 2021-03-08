import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// 이것도 useConfirm처럼 hook은 아님
const usePreventLeave = () => {
  const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
}

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
  <div className="App">
      <h1>React Hooks usePreventLeave</h1>
      <button onClick={ enablePrevent }>Protect</button>
      <button onClick={ disablePrevent }>Unprotect</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)