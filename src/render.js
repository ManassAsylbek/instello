import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from "./Redax/State";
import {addComment} from "./Redax/State";

export let rerenderEntireTree = () =>{

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<App state={State} addComment={addComment} />
</React.StrictMode>
);
}
