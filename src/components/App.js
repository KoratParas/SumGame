import React, {Component} from 'react';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameID: 1,
    };
  }

  resetGame = () => {
    this.setState(prevState => {
      return {gameID: prevState.gameID + 1};
    });
  };

  render() {
    return (
      <Game key={this.state.gameID} randomNumberCount={6} initialSeconds={10} onPlayAgain={this.resetGame}/>
    );
  }
}

export default App;
