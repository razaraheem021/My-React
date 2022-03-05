import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0
      }
    }
    plusC(){
        this.setState
        (
            {
                count:this.state.count+1
            }
            )
    }
    subC(){
        this.setState({
            count:this.state.count-1
        })
    }
    rset(){
        this.setState(
            {
                count:0
            })
    }
  render() {
    return (
      <div>
          <h3>Counter</h3>
          <h1>{this.state.count}</h1>
          <button onClick={()=>this.plusC()} >Add</button>
          <button onClick={()=>this.subC()} >Sub</button>
          <button onClick={()=>this.rset()} >Reset</button>
      </div>
    )
  }
}

export default Counter