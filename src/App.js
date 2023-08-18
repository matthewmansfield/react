import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
super();

  this.state = {
    monsters: [
      {
        name: 'Linda',
        id: 'eke345323'
      },
      {
        name: 'Frank',
        id: 'emmnde22918323'
      },
      {
        name: 'Jacky',
        id: 'euewgbde312567623'
      },
      {
        name: 'Beavis',
        id: 'dgyeb345323'
      }
    ]
   
  };
}
  render() {
    return <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>;
        })
      }
    </div>;
  }
}

export default App;
