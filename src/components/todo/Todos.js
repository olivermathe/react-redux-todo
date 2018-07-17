import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { fetchTodos } from "../../actions/TodoActions";
import { toogleSideBar } from "../../actions/SideBarActions";
import TodoItem from './TodoItem';
import TodoHeader from "./TodoHeader";

class Todos extends Component {

  componentWillMount() {

    this.props.fetchTodos();

  }

  render() {

    const todos = this.props.todos;

    const handleTodos = todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    const subheader = TodoHeader(this.props);

    return (
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs>
          <List subheader={subheader}>
            {handleTodos}
          </List>
        </Grid>
        <Grid item xs />
      </Grid>
    )
  }
}

const mapProps = state => ({
  todos: state.todo.items
})

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  toogleSideBar: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default connect(mapProps, { 
  fetchTodos,
  toogleSideBar
})(Todos);