import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        
    }
    increment(){
        //this two lines will change the value of count but the component won't be re-rendered
        // this.state.count=this.state.count+1
        // console.log(this.state.count)
        //case 1: putting the console after the setState, the operation is asynchronous so console.log will be executed
        //parallely and value won't be changed
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count)
        //case 2: to avoid above issue, use callback as second parameter of setState
        this.setState({
            count:this.state.count+1
        },
        ()=>console.log('Callback value: '+this.state.count)
        )
        console.log('Asynchronous value: '+this.state.count)
        
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
