import React from 'react';
import { Grid, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const TodoHeader = (props) => (
  <div>
    <Grid container spacing={24} >
      <Grid item xs >
        <IconButton >
          <MenuIcon onClick={props.toogleSideBar}/>
        </IconButton>
      </Grid>
      <Grid item xs style={{textAlign: 'center'}} >
        <h3>Todo List</h3>
      </Grid>          
      <Grid item xs />
    </Grid>
    <hr />
  </div>
);

export default TodoHeader;      