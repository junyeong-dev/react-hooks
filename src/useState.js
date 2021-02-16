import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// React hooks
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

// 기존 방식 - 기존 방식과 hooks를 비교하면 코드의 양부터 차이가 많이남
class ClassApp extends React.Component {
  state = {
    item: 1
  }

  render() {
    const { item } = this.state;
    return (
      <div className="App">
      <h1>React Hooks useState { item }</h1>
      <button onClick={ this.incrementItem }>Increment</button>
      <button onClick={ this.decrementItem }>Decrement</button>
    </div>
    )
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)