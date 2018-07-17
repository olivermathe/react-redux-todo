import React, { Component } from 'react';
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import PropTypes from "prop-types";
import BarList from "./BarList";

import { 
  fetchSideBarItems, 
  toogleSideBar 
} from "../../actions/SideBarActions";

class SideBar extends Component {

  componentWillMount() {

    this.props.fetchSideBarItems();

  }

  render() {

    const { isOpen, items } = this.props;

    return (
      <Drawer open={isOpen} onClose={this.props.toogleSideBar}>
        <div tabIndex={0} role="button" onClick={this.props.toogleSideBar}>
          <BarList items={items}/>
        </div>
      </Drawer>
    );
  }
}

const mapProps = state => ({
  items: state.sideBar.items,
  isOpen: state.sideBar.isOpen
})

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  fetchSideBarItems: PropTypes.func.isRequired,
  toogleSideBar: PropTypes.func.isRequired
}

export default connect(mapProps, { 
  fetchSideBarItems, 
  toogleSideBar 
})(SideBar);