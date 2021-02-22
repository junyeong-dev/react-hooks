import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  // useRef : reference는 document.getElementById 처럼 component의 어떤 부분을 선택할 수 있는 방법
  // 변수명은 아무거나 상관 없음
  const input = useRef();
  setTimeout(() => input.current.focus(), 3000);
  return (
  <div className="App">
      <h1>React Hooks useRef</h1>
      <input ref={ input } placeholder="Reference" />
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)