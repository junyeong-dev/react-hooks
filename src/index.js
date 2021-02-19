import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
    // useEffect는 ComponentDidmount, ComponentWillUnMount, ComponentDidUpdate의 역할을 함
    const hello = () => console.log("hello");
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    /*
      useEffect의 첫번째 매개변수는 함수이고 두번째 매개변수는 dependency
      useEffect(hello) : 항상 hello 함수가 실행됨
      useEffect(hello, [numberOne]) : numberOne의 값이 변할 때 실행됨
      useEffect(hello, []) : 딱 한번만 실행됨(로드될 때)
    */
    useEffect(hello, []);

    return (
    <div className="App">
        <h1>React Hooks useTabs</h1>
        <button onClick={ () => setNumberOne(numberOne + 1) }>{ numberOne }</button>
        <button onClick={ () => setNumberTwo(numberTwo + 1) }>{ numberTwo }</button>
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)