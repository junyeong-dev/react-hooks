import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useFadeIn = (duratrion = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            const { current } = element;
            current.style.transition = `opacity ${ duratrion }s ease-in-out ${ delay }s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity:0 } };
}

const App = () => {
    const fadeInH1 = useFadeIn(5, 3);
    return (
    <div className="App">
        <h1 { ...fadeInH1 }>React Hooks useFadeIn</h1>
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)