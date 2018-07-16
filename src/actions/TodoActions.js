import { FETCH_TODOS, REMOVE_TODO } from "./Types";

export const fetchTodos = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => dispatch({
          type: FETCH_TODOS,
          payload: todos
      }))

}

export const removeTodo = id => dispatch => dispatch({
    type: REMOVE_TODO,
    id
});