import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import AddTask from "./AddTask";
import ListItems from "./ListItems";
import './ToDoItemList.css';

class ToDoItemList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskList: [],
            progress: 0 
        }
    }

    updateTaskList = (taskValue) => {
        const prevTaskList = this.state.taskList.slice();
        const updatedTaskList = [...prevTaskList, ...[{ key: Date.now(), task: taskValue, completed: false }]];
        const computeUpdatedProgress = this.computeProgress(updatedTaskList);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: updatedTaskList,
        })
    }

    computeProgress(taskList) {
        let completed = 0;
        taskList.forEach(task => {
            if(task.completed) {
                completed++;
            }
        });

        const progress = (completed / taskList.length).toFixed(2);
        return progress * 100;
    }

    handleTaskClick = (key) => {
        const prevTaskList = this.state.taskList.slice();
        const completedTasks = prevTaskList.map(task => {
            if(task.key === key) {
                task.completed = !task.completed;
            }
            return task;
        });
        
        const computeUpdatedProgress = this.computeProgress(completedTasks);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: completedTasks,
        })
    }

    handleCompletedTasks = () => {
        const prevTaskList = this.state.taskList.slice();
        const unCompletedTasks = prevTaskList.filter(task => !task.completed);

        this.setState({
            taskList: unCompletedTasks,
            progress: 0
        })
    }

    render() {
        const jumbotronInstance = (
            <div>
                <Row className="show-grid">
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}>

                        <div className="InputElements">
                            <h3>To Do List</h3>
                            <AddTask updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            <div className="taskProgressBar">
                                <ProgressBar active now={this.state.progress} label={`${this.state.progress}%`} />
                            </div>
                        </div>

                        <div className="taskListElements">
                            <ListItems tasks={this.state.taskList} handleTaskClick={this.handleTaskClick} />
                        </div>

                    </Col>
                    <Col xsHidden md={4}></Col>
                </Row>
            </div>
        );

        return (
            <div>
                {jumbotronInstance}
            </div>
        );
    }
}

export default ToDoItemList;