import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import Box from "@material-ui/core/Box";
import Button from "react-bootstrap/Button";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";

class AddTask extends Component {
  state = {
    task: "",
    description: ""
  };

  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onclick = (dispatch, e) => {
    e.preventDefault();
    const { task, description } = this.state;
    const newTask = {
      id: uuid(),
      task,
      description
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    this.setState({ task: "", description: "" });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        name="task"
                        placeholder="Task"
                        value={this.state.task}
                        onChange={this.onchange}
                      />
                      <br></br>
                      <Input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.onchange}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Box mx="auto" p={1}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={this.onclick.bind(this, dispatch)}
                >
                  Add Task
                </Button>
              </Box>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTask;
