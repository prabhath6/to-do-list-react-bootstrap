import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import React from 'react';

class AddTask extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskValue: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatedTaskList(this.state.taskValue);

        this.setState({
            taskValue: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            taskValue: event.target.value
        })
    }

    removeCompletedTasks = () => {
        this.props.handleCompletedTasks();
    }

    render() {
        const formInstance = (
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="formInlineName">
                    <FormControl type="text" placeholder="Add Task" value={this.state.taskValue} onChange={this.handleChange} />
                </FormGroup>
                {' '}
                <Button bsStyle="primary" type="submit">Add</Button>
                {' '}
                <Button bsStyle="danger" onClick={this.removeCompletedTasks}>Remove Completed</Button>
            </Form>
        );

        return (
            <div className="taskInputs">
                {formInstance}
            </div>
        );
    }

}

export default AddTask;