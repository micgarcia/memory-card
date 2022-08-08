import React, {useState, useEffect } from 'react';
import PlaceCard from './PlaceCard';

const GameContainer = () => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [charArray, setCharArray] = useState([]);
  const [clicked, setClicked] = useState([]);


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
    console.log(e.target.id)
    if (clicked.includes(e.target.id)) {
      changeScore(0);
    } else {
      changeScore(1);
      setClicked(clicked => [...clicked, e.target.id]);
    }

  }

  useEffect(() => {
    shuffleList();
  },[counter])

  useEffect(() => {

  },[clicked])

  useEffect(() => {
  }, [score])

  useEffect(() => {

  }, [highScore])

  // When clicked, setCharacters to change click prop. Check if clicked before that,
  //  if not clicked, then add one to score. Otherwise set score to 0.

  return (

    <div id="gameCont">
      <div id="scoreCont">
        <div id="scoreBoard">Score: {score}</div>
        <div id="highScore">High Score: {highScore}</div>
      </div>
      <div className="cardCont">
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={0}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={1}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={2}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={3}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={4}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={5}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={6}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={7}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={8}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={9}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={10}/>}</div>
        <div className="card" onClick={changeCounter}>{<PlaceCard names={charArray} position={11}/>}</div>
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