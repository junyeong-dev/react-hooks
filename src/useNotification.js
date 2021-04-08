import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }

    // Notification API를 통해 구현
    const triggerNotification = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return triggerNotification;
}

const App = () => {
  const triggerNotification = useNotification("Notification", {body: "Notificion body"});
  return (
  <div className="App">
      <h1>React Hooks useNotification</h1>
      <button onClick={ triggerNotification }>Notificataion</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)