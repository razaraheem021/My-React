import React, { Component } from "react";
class welcom extends Component{
    constructor(){
        super();
        this.state={
            message:'Hello Viewer'
        }
    }
    changeText(){
        this.setState(
            {
                message:'Thanku For Subscribing'
            }
            )
    }
render(){
    return (
        <div>
            <h1>Raza Raheem</h1>
            <h2>{this.state.message}</h2>
            <button onClick={()=>this.changeText()}>Subscribe</button>
        </div>
    )
}
}
export default welcom;

