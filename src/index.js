import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    }
    return { value, onChange };
}

const App = () => {
    const name = useInput("Name is ");
    return (
    <div className="App">
        <h1>React Hooks useInput</h1>
        <input placeholder="Name" { ...name } />
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)