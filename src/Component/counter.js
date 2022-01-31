import React from "react";
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
                count:0
        }
       
    }
    incrementFunction=()=>{
        this.setState({count:this.state.count+1})

    }
    decrementFunction=()=>{
        this.setState({count:this.state.count-1})
    }
    resetFunction=()=>{
        this.setState({count:this.state.count=0})
    }
    selfCount=()=>{
        setInterval(() => {
            this.setState({
                count: this.state.count+ 1,
            });
        }, 1000);
    }

    render(){
        return(
            <>
            <button onClick={this.incrementFunction}>Increment</button>
            <span>{this.state.count}</span>
            <button onClick={this.decrementFunction}>Decrement</button>
            <button onClick={this.resetFunction}>reset</button>
            <button onClick={this.selfCount}>SelfCounter</button>
            </>

        );
    }
}
export default Counter;