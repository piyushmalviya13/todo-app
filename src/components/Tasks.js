import React, { Component } from "react";
import Task from "./Task";
import { Consumer } from "../context";
class Tasks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              {value.tasks.map(task => (
                <Task key={task.id} task={task} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Tasks;
