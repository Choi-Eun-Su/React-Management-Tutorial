import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <imr src={logo} lat="logo"/>
        <h2>리액트 공부 시작</h2>
      </div>
    )
  }
}

export default App;
