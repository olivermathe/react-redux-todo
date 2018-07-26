import { FETCH_SB_ITEMS, TOOGLE_SB } from "../actions/Types";

const defaultState = {
  items: [],
  isOpen: false
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case FETCH_SB_ITEMS:

      return {
        ...state,
        items: action.payload
      }

    case TOOGLE_SB:
      return {
        ...state,
        isOpen: !state.isOpen
      }

    default:
      return state;
  }

}