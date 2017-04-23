import React, { Component } from 'react';

export default class If extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return this.props.show?<span>{this.props.children}</span>:<span></span>
  }
}
