import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { fetchTodos, removeTodo } from "../../actions/TodoActions";
import { toogleSideBar } from "../../actions/SideBarActions";
import TodoItem from './TodoItem';
import TodoHeader from "./TodoHeader";

class Todos extends Component {

  componentDidMount() {

    this.props.fetchTodos();

  }

  render() {
    return (
      <Grid container>
        <Grid item lg />
        <Grid item sm >
          <List subheader={<TodoHeader onOpenMenu={this.props.toogleSideBar}/>}>
            {this.props.todos && this.props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onDeleteTodo={this.props.removeTodo}/>
            ))}
          </List>
        </Grid>
        <Grid item lg />
      </Grid>
    )
  }
}

const mapProps = state => ({
  todos: state.todo.items
})

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toogleSideBar: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default connect(mapProps, { 
  fetchTodos,
  removeTodo,
  toogleSideBar
})(Todos);