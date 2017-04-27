// import React from 'react'
// import {render} from 'react-dom'
//
// import Component from '../../src'
//
// let Demo = React.createClass({
//   render() {
//     return <div>
//       <h1>react_if Demo</h1>
//       <Component/>
//     </div>
//   }
// })
//
// render(<Demo/>, document.querySelector('#demo'))

import React, {Component} from 'react'
import {render} from 'react-dom'

import If from '../../src'

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <section>
        <If show={this.state.show}>show</If>
        <If show={!this.state.show}>hide</If>
        <button onClick={() => this.setState(prevState => ({
          show: !prevState.show
        }))}>switch</button>
      </section>
    )
  }
}
render(
  <Demo/>, document.querySelector('#demo'));
