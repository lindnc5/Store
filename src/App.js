import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  

 
  
  render() {
      

    return (
      <div className = "App">
        <h1>Welcome to the counries/states selector</h1>
        <h2>Please select a country</h2>
        <div>
          
          {/* <VisibleCountrySelector /> */}
        </div>
        <h2>Next, select a state</h2>
        <div>
         {/* <VisibleStateSelector /> */}
          <br/>
          <br/>
          {/* <VisibleCountryAdd/> */}
          <div>
            
          {/* <VisibleStateAdd/> */}
            
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
