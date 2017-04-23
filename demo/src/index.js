import React,{Component} from 'react'
import {render} from 'react-dom'

import If from '../../src'

class Demo extends Component {
  constructor(){
      super();
      this.state = {
          show : true
      }
  }
  render(){
    return (
        <section>
          <If show={this.state.show}>show</If>
        <button onClick={()=>this.setState(prevState=>({
            show:!prevState.show
          }))}>switch</button>
      </section>
      )
  }
}
render(<Demo/>, document.querySelector('#demo'));
