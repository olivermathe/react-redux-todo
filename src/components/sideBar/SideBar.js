import React, { Component } from 'react';
import { connect } from "react-redux";
import { SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BarList from "./BarList";

import { fetchSideBarItems, toogleSideBar } from "../../actions/SideBarActions";

class SideBar extends Component {

  componentWillMount() {

    this.props.fetchSideBarItems();

  }

  render() {

    const { isOpen, items } = this.props;
    
    const classes = {
      paper: this.props.classes.drawer
    }

    const modalProps = {
      keepMounted: true
    }

    return (
      <SwipeableDrawer 
        ModalProps={modalProps} 
        classes={classes} 
        open={isOpen} 
        onOpen={this.props.toogleSideBar} 
        onClose={this.props.toogleSideBar}>

        <div 
          tabIndex={0} role="button" 
          onClick={this.props.toogleSideBar}>

          <BarList items={items}/>
        </div>

      </SwipeableDrawer>
    )
  }
}

const mapProps = state => ({
  items: state.sideBar.items,
  isOpen: state.sideBar.isOpen
})

const styles = {
  drawer: {
    width: 250,
    height: '100%',
    background: '#2196f3'
  }
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  fetchSideBarItems: PropTypes.func.isRequired,
  toogleSideBar: PropTypes.func.isRequired
}

export default connect(mapProps, { 
  fetchSideBarItems, 
  toogleSideBar 
})(withStyles(styles)(SideBar));