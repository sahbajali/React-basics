import logo from './logo.svg';
import './App.css';
//import { Greet } from './components/Greet' use this when using only export(not default)
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import { render } from '@testing-library/react';
import React, {Component} from 'react'
class App extends Component {
  render(){
  return (
    <div className="App">
      <Greet name='Bruce' heroname='Spiderman'/>
      <Greet name='Diana' heroname='Wonder woman'/>
      <Greet name='Sahbaj' heroname='Ali'>
        <p>Hey this is Sahbaj</p>
      </Greet>
      {/* <Welcome/>
      <Hello/> */}
    </div>
  )
}
}
export default App
