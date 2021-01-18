import React, { Component } from "react";
import { findDOMNode, render, unmountComponentAtNode } from 'react-dom';
import ComponentToUnmount from "./ComponentToUnmount";

class FindNode extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state={
        isVisible:false
    }
  }

  handleClick() {
    this.setState({isVisible:!this.state.isVisible})
   // unmountComponentAtNode(document.getElementById('root'))
  }

  render() {
    return (
      <div>
        <input type="text" ref="myinput" />
        <input
          type="button"
          value="Click to focus input"
          onClick={this.handleClick}
        />
        <ComponentToUnmount/>
        {/* {this.state.isVisible ? <ComponentToUnmount /> :null } */}
      </div>
    );
  }
}

export default FindNode;