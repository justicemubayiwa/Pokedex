import React, {Component} from  'react';
import './App.css';
import {PokeList, DetailView, Pokemon} from './components'

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <div className="App">
        <PokeList />
        <DetailView />

      </div>
    )
  }
}

export default App;
