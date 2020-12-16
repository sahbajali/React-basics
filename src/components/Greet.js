import react from 'react';
//const Greet=()=>{return <h1>Hello Sahbaj Welcome</h1>}
const Greet=(props)=>{
    console.log(props)
    return (
        //using a main div tag because we can return only one element
    <div>
        <h1>Hello {props.name} aka {props.heroname}</h1>
        {props.children}
    </div>
    )
}
export default Greet
//export Greet (incase of only export we can't use the export statement later. we have to use where we are declaring the func)