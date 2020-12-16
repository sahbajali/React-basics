import react, {Component} from 'react'
class Welcome extends Component
{
    render(){
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}
//here using props in Class. Called Welcome from App.js with three elements
export default Welcome