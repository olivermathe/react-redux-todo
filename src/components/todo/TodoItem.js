import React from 'react';
import { IconButton, ListItem } from "@material-ui/core";
import { ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

function TodoItem (props) {
  return (
    <ListItem>
      <ListItemText primary={props.todo.title} />
      <ListItemSecondaryAction>
        <IconButton color="secondary" aria-label="Remove" onClick={() => props.onDeleteTodo(props.todo.id)}>
          <CloseIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoItem;