import React, {useState, useEffect } from 'react';
import Dwight from './Dwight';
import PlaceCard from './PlaceCard';

const GameContainer = () => {
  const [score, setScore] = useState(0);
  const [charArray, setCharArray] = useState([]);
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



  useEffect(() => {
    const chooseIndex = () => {

      let choices = ['Dwight', 'Michael', 'Jim', 'Pam', 'Robert',
       'Angela', 'Erin', 'Kevin', 'Gabe', 'Toby', 'Stanley', 'Ryan'];
      let chosenIndex = Math.floor(Math.random() * choices.length);
      let chosenOne = choices[chosenIndex];
      if (!charArray.includes(chosenOne)) {
        setCharArray( charArray => ([
          ...charArray,
          chosenOne
        ]))
        charArray.push(chosenOne);
      }
    }

    while(charArray.length < 12) {
      chooseIndex();
    }
    console.log(charArray);


  })

  const changeScore = () => {
    setCharArray([]);
    setScore(1);
  }
  document.addEventListener('click', changeScore);


  return (

    <div className="cardCont">
      <div className="card">{charArray[0]}</div>
      <div className="card">{charArray[1]}</div>
      <div className="card">{charArray[2]}</div>
      <div className="card">{charArray[3]}</div>
      <div className="card">{charArray[4]}</div>
      <div className="card">{charArray[5]}</div>
      <div className="card">{charArray[6]}</div>
      <div className="card">{charArray[7]}</div>
      <div className="card">{charArray[8]}</div>
      <div className="card">{charArray[9]}</div>
      <div className="card">{charArray[10]}</div>
      <div className="card">{charArray[11]}</div>
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