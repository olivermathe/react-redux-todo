import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchTodos } from "../actions/TodoActions";
import TodoItem from './TodoItem';

class Todos extends Component {

  componentWillMount() {

    this.props.fetchTodos();

  }

  render() {

    const todos = this.props.todos;

    const handleTodoItems = todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));
    
    return (
      <div>
        <h1>Todos</h1>
        {handleTodoItems}
      </div>
    )
  }
}

const mapProps = state => ({
  todos: state.todo.items
})

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default connect(mapProps, { fetchTodos })(Todos);