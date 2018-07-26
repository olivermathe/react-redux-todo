import { FETCH_TODOS, REMOVE_TODO } from "../actions/Types";

const defaultState = {
  items: []
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      }

    case REMOVE_TODO:

      let items = state.items;

      const index = items.findIndex(item => item.id === action.id);

      return {
        ...state,
        items: [
          ...items.slice(0, index),
          ...items.slice(index +1)
        ]
      }

    default:
      return state;
  }

}