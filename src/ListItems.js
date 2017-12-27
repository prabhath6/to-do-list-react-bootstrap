import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import './ListItems.css'

class ListItems extends React.Component {

    handleClick = (key) => {
        this.props.handleTaskClick(key);
    }

    createListItems = (task) => {
    return (<ListGroupItem 
        bsStyle={task.completed ? "success" : "danger"} 
        key={task.key} 
        className="taskItem" 
        onClick={() => this.handleClick(task.key) }>{task.task}</ListGroupItem>);
    }

    render() {
        const tasks = this.props.tasks.map(this.createListItems);
        return (
            <ListGroup className="taskItems">
                {tasks}
            </ListGroup>
        );
    }
}

export default ListItems;