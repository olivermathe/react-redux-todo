import { FETCH_SB_ITEMS, TOOGLE_SB } from "./Types";

export const fetchSideBarItems = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(items => dispatch({
          type: FETCH_SB_ITEMS,
          payload: items
      }));

}

export const toogleSideBar = () => dispatch => dispatch({type: TOOGLE_SB});