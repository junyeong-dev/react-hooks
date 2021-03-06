import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const content = [
    {
        tab: "Section 1",
        content: "Content 1"
    },
    {
        tab: "Section 2",
        content: "Content 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
    <div className="App">
        <h1>React Hooks useTabs</h1>
        { 
            content.map((section, index) => (
                <button onClick={ () => changeItem(index) }>{ section.tab }</button>)) 
        }
        <div>
            { currentItem.content }
        </div>
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)