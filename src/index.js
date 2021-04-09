import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import useAxios from './useAxios';

const App = () => {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.am/api/v2/list_movies.json" });
  console.log(loading, error, data);
  return (
  <div className="App">
      <h1>React Hooks useAxios</h1>
      <button onClick={ refetch }>Refetch</button>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)