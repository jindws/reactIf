import React, { Component } from 'react';
// import {render} from 'react-dom';

export default class ReactIf extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <span style={{display:(this.props.show?'':'none')}}>
        {this.props.children}
      </span>
    );
  }
}
