import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: { value }
        } = event;
        // hooks와 관련 없지만 간단한 유효성 검사 추가
        // upadte용 flag
        let willUpdate = true;
        // 넘어온 변수의 타입이 function인지 확인
        if(typeof validator === "function") {
            willUpdate = validator(value);
        }
        if(willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
}

const App = () => {
    // 길이 검사 유효성 검사
    // const validator = value => value.length < 10;
    // 특정한 문자가 포함되는지 검사하는 유효성 검사
    const validator = value => !value.includes("@");
    const name = useInput("Name is ", validator);
    return (
    <div className="App">
        <h1>React Hooks useInput</h1>
        <input placeholder="Name" { ...name } />
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)