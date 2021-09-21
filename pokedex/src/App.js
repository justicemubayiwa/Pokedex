import React, {Component} from  'react';
import './App.css';
import {PokeList, DetailView, Pokemon} from './components'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemon: {
        id: 1,
        name: "bulbasaur",
        height: 7,
        weight: 69,
        type: "grass",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  render(){
    return(
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />

      </div>
    )
  }
}

export default App;
