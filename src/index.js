import React from "react";
import ReactDOM from 'react-dom';
import ToDoItemList from './ToDoItemList';
import './index.css';

const reactContainer = document.getElementById("react-container");

ReactDOM.render(<div>
    <ToDoItemList />
    </div>, reactContainer
);