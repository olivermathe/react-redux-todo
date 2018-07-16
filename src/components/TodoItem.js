import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeTodo } from "../actions/TodoActions";

class TodoItem extends Component {

  render() {

    const todo = this.props.todo;

    const onDeleteTodo = id => this.props.removeTodo(id);

    return (
      <li><strong>{todo.title}</strong> <button onClick={onDeleteTodo.bind(this, todo.id)}>X</button></li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo })(TodoItem);