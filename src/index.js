import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  // Hooks는 React의 state machine에 연결하는 기본적인 방법
  // 변수명의 경우 꼭 item, setItem과 같은 형식일 필요는 없음
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>React Hooks useState { item }</h1>
      <button onClick={ incrementItem }>Increment</button>
      <button onClick={ decrementItem }>Decrement</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)