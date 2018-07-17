import React, { Component } from 'react';
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

class BarList extends Component {
  render() {

    const { items } = this.props;

    const buttons1 = items.slice(0, 3).map(item => (
      <ListItem key={item.id} button><ListItemText primary={item.username} /></ListItem>
    ));

    const buttons2 = items.slice(4).map(item => (
      <ListItem key={item.id} button><ListItemText primary={item.username} /></ListItem>
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
}

BarList.propTypes = {
  items: PropTypes.array.isRequired
}

export default BarList;