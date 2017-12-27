import React from "react";
import { Jumbotron, Row, Col  } from "react-bootstrap";
import AddTask from "./AddTask";
import ListItems from "./ListItems";
import './ToDoItemList.css';

class ToDoItemList extends React.Component {

    /*
        Components used
        1. Task List
        2. Add Task
        3. Progress Bar
     */

    constructor(props) {
        super(props)

        this.state = {
            taskList: []
        }
    }

    updateTaskList = (taskValue) => {
        const prevTaskList = this.state.taskList.slice();
        const updatedTaskList = [...prevTaskList, ...[{ key: Date.now(), task: taskValue }]];

        console.log(updatedTaskList);

        this.setState({
            taskList: updatedTaskList
        })
    }

    handleClick = (key) => {
        const prevTaskList = this.state.taskList.slice();
        const filteredTaskList = prevTaskList.filter(task => task.key !== key);

        this.setState({
            taskList: filteredTaskList
        })
    }

    render() {
        const jumbotronInstance = (
            <Jumbotron>
                <Row className="show-grid">
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}>

                        <div className="InputElements">
                            <h3>To Do List</h3>
                            <AddTask updatedTaskList={this.updateTaskList} />
                        </div>

                        <Row className="show-grid">
                            <Col xs={10} xsOffset={0}>
                                <div className="taskListElements">
                                    <ListItems tasks={this.state.taskList} deleteTask={this.handleClick} />
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col xsHidden md={4}></Col>
                </Row>
            </Jumbotron>
        );

        return (
            <div>
                {jumbotronInstance}
            </div>
        );
    }
}

export default ToDoItemList;