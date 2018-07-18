import React, { Component } from 'react';
import { connect } from "react-redux";
import { SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BarList from "./BarList";

import { fetchSideBarItems, toogleSideBar } from "../../actions/SideBarActions";

class SideBar extends Component {

  // class config [methods, state]

  componentWillMount() {

    this.props.fetchSideBarItems();

  }

  render() {

    // variables to 'html' body

    const { isOpen, items, classes } = this.props;
    
    const paper = {
      paper: classes.drawer
    }

    const modalProps = {
      keepMounted: true
    }

    // 'html' body

    return (
      <SwipeableDrawer ModalProps={modalProps} classes={paper} open={isOpen} onOpen={this.props.toogleSideBar} onClose={this.props.toogleSideBar}>
        <div tabIndex={0} role="button" onClick={this.props.toogleSideBar}>
          <BarList items={items}/>
        </div>
      </SwipeableDrawer>
    );
  }
}

// variables to final config

const mapProps = state => ({
  items: state.sideBar.items,
  isOpen: state.sideBar.isOpen
})

const styles = {
  drawer: {
    width: 250,
    height: '100%'
  }
}

// final config to export

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