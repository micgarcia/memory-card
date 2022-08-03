import GameContainer from './components/GameContainer';

function App() {

  return(
    <div id='App'>
      <div id='header'>
        <h1>The Office Memory Card Game</h1>
      </div>

      <GameContainer />

    </div>
  )
}

/*
  Create container where the game cards will be
    Create component for each character card
      Each card component will have hooks for if they have been clicked
      When card is clicked, calls function that shuffles the cards
    Shuffle function will have to be called in the parent container

*/

export default App;
