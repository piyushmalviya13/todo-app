import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import { Consumer } from "../context";

export default class Task extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_TASK", payload: id });
    console.log(id);
  };

  render() {
    const { task } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Box mx="auto" p={1}>
                <Card variant="outlined">
                  <div>
                    <CardContent>
                      <Typography variant="h4" component="h2">
                        {task.task}
                      </Typography>

                      <Typography variant="body2" component="p">
                        <br></br>
                        {task.description}
                      </Typography>
                    </CardContent>
                    <div>
                      <DoneIcon />
                      <DeleteIcon
                        onClick={this.onDeleteClick.bind(
                          this,
                          task.id,
                          dispatch
                        )}
                      />
                    </div>
                  </div>
                </Card>
              </Box>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
