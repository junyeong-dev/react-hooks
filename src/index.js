import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// useNetwork - navigator가 online 또는 offline이 되는걸 막아줌
const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(onChange === "function"){
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, []);
    return status;
};


const App = () => {
  const handleNetworkChange = (online) => {
      console.log(online ? "Online" : "Offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
  <div className="App">
      <h1>React Hooks useNetwork</h1>
      <h1>{ onLine ? "Online" : "Offline" }</h1>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)