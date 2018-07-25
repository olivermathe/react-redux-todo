import React, { Component } from 'react';
import { connect } from "react-redux";
import { IconButton, ListItem } from "@material-ui/core";
import { ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

import { removeTodo } from "../../actions/TodoActions";

class TodoItem extends Component {

  render() {

    const todo = this.props.todo;

    const onDeleteTodo = id => this.props.removeTodo(id);

    return (
      <ListItem>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton color="secondary" aria-label="Remove" onClick={onDeleteTodo.bind(this, todo.id)}>
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo })(TodoItem);