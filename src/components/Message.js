import react, {Component} from 'react'
class Message extends Component
{
    //it is important to call super() becoz We have inherited Component
    constructor(){
        super()
        //setting state
        this.state={
            message:'Welcome User'
        }
    }
    //changing state here
    changeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
//here using props in Class. Called Welcome from App.js with three elements
export default Message