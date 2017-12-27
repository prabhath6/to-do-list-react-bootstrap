import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import './ListItems.css'

class ListItems extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listStyle: 'danger'
        }
    }

    handleMouseEnter = () => {
        this.setState({
            listStyle: 'success'
        })
    }

    handleMouseLeave = () => {
        this.setState({
            listStyle: 'danger'
        })
    }

    handleClick = (key) => {
        this.props.deleteTask(key);
    }

    createListItems = (task) => {
    return (<ListGroupItem 
        bsStyle={this.state.listStyle} 
        key={task.key} 
        className="taskItem" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave} 
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