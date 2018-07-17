import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { List, ListSubheader, Grid } from "@material-ui/core";
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

    const style = {
      maxWidth: '500px'
    }

  const subheader = (<div style={{textAlign: 'center'}}><h3 >Todo List</h3><hr /></div>);

    return (
      <Grid container spacing={24}>
        <Grid item xs>
        </Grid>
        <Grid item xs>
          <List subheader={subheader}>
            {handleTodoItems}
          </List>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
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