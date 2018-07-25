import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

function BarList (props) {

  const classes = {
    primary: props.classes.primaryText
  }

  const buttons1 = props.items.slice(0, 3).map(item => (
    <ListItem key={item.id} button>
      <ListItemText classes={classes} primary={item.username} />
    </ListItem>
  ));

  const buttons2 = props.items.slice(4).map(item => (
    <ListItem key={item.id} button>
      <ListItemText classes={classes} primary={item.username} />
    </ListItem>
  ));

  return (
    <div>
      <List>
        {buttons1}
      </List>
      <Divider />
      <List>
        {buttons2}
      </List>
    </div>
  );

}

const styles = {
  primaryText: {
    color: 'white'
  }
}

BarList.propTypes = {
  items: PropTypes.array.isRequired
}

export default withStyles(styles)(BarList);