import GameContainer from '/memory-card/src/components/GameContainer';
import '/memory-card/styles/App.css';

function App() {

  return(
    <div id='App'>
      <div id='header'>
        <h1><b>The Office</b> Memory Card Game</h1>
        <h2>Try to click on all the characters without clicking on one more than once!</h2>
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
