import React, {useState, useEffect } from 'react';
import Dwight from './Dwight';
import PlaceCard from './PlaceCard';

const GameContainer = () => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [charArray, setCharArray] = useState([]);
  const [clicked, setClicked] = useState([]);

  /*
  const [characters, setCharacters] = useState({
    Dwight: {
      placed: false,
      clicked: false,
    },
    Michael: {
      placed: false,
      clicked: false,
    },
    Jim: {
      placed: false,
      clicked: false,
    },
    Pam: {
      placed: false,
      clicked: false,
    },
    Robert: {
      placed: false,
      clicked: false,
    },
    Angela: {
      placed: false,
      clicked: false,
    },
    Erin: {
      placed: false,
      clicked: false,
    },
    Kevin: {
      placed: false,
      clicked: false,
    },
    Gabe: {
      placed: false,
      clicked: false,
    },
    Toby: {
      placed: false,
      clicked: false,
    },
    Stanley: {
      placed: false,
      clicked: false,
    },
    Ryan: {
      placed: false,
      clicked: false,
    }
  });
  */


  let choices = ['Dwight', 'Michael', 'Jim', 'Pam', 'Robert',
       'Angela', 'Erin', 'Kevin', 'Gabe', 'Toby', 'Stanley', 'Ryan'];

  const shuffleList = () => {
    setCharArray(choices.sort(() => Math.random() - 0.5).slice(0, 12));
  }

  const changeScore = (status) => {
    if (status === 0) {
      setScore(0);
      if (score > highScore) {
        setHighScore(score);
      }
      setClicked([]);
    } else if (status === 1) {
      setScore(score + 1);
    }
  };

  const changeCounter = (e) => {
    setCounter(counter + 1);
    if (clicked.includes(e.target.innerText)) {
      changeScore(0);
    } else {
      changeScore(1);
      setClicked(clicked => [...clicked, e.target.innerText]);
    }

  }

  useEffect(() => {
    shuffleList();
  },[counter])

  useEffect(() => {
    console.log(clicked);

  },[clicked])

  useEffect(() => {
    console.log('score: ' + score);
  }, [score])

  useEffect(() => {

  }, [highScore])

  // When clicked, setCharacters to change click prop. Check if clicked before that,
  //  if not clicked, then add one to score. Otherwise set score to 0.

  return (

    <div id="gameCont">
      <div id="scoreBoard">Score: {score}</div>
      <div id="highScore">High Score: {highScore}</div>
      <div className="cardCont">
        <div className="card" onClick={changeCounter}>{charArray[0]}</div>
        <div className="card" onClick={changeCounter}>{charArray[1]}</div>
        <div className="card" onClick={changeCounter}>{charArray[2]}</div>
        <div className="card" onClick={changeCounter}>{charArray[3]}</div>
        <div className="card" onClick={changeCounter}>{charArray[4]}</div>
        <div className="card" onClick={changeCounter}>{charArray[5]}</div>
        <div className="card" onClick={changeCounter}>{charArray[6]}</div>
        <div className="card" onClick={changeCounter}>{charArray[7]}</div>
        <div className="card" onClick={changeCounter}>{charArray[8]}</div>
        <div className="card" onClick={changeCounter}>{charArray[9]}</div>
        <div className="card" onClick={changeCounter}>{charArray[10]}</div>
        <div className="card" onClick={changeCounter}>{charArray[11]}</div>
      </div>
    </div>
  )

}

/*
  have state hooks in GameContainer that track click status of each char
    Have GameContainer return divs that call each character comp.
    but the div in GameContainer have the onClick function that changes
    the click state of that character. Click also calls function within this
    component that shuffles cards
*/

export default GameContainer;