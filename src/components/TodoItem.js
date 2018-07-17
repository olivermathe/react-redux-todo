import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { IconButton, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { removeTodo } from "../actions/TodoActions";

class TodoItem extends Component {

  render() {

    const todo = this.props.todo;

    const onDeleteTodo = id => this.props.removeTodo(id);

    return (
      <ListItem>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Remove">
            <CloseIcon onClick={onDeleteTodo.bind(this, todo.id)} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo })(TodoItem);