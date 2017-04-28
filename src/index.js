import React, { Component } from 'react';

export default class If extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let children = this.props.children;
    if(!this.props.children.props){
      children = <span>{this.props.children}</span>
    }
    return this.props.show?children:null
  }
}
