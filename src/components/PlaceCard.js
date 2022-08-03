import React, {useState, useEffect} from 'react';

const PlaceCard = () => {
  const [currentChar, setCurrentChar] = useState('');
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

  const keys = Object.keys(characters);
  let chosenChar = keys[Math.floor(Math.random() * keys.length)];


  useEffect(() => {
    const changeCurrentChar = () => {
      setCurrentChar(chosenChar);
    }

    const placeChar = () => {
      setCharacters( characters => ({
        ...characters,
        [chosenChar]: {
          placed: true,
          clicked: false
        }
      }));
    }

    document.addEventListener('click', changeCurrentChar);
  }, [currentChar])

  return (
    <div>{currentChar}</div>
  )
  /*
  setCharacters( characters => ({
    ...characters,
    [chosenChar]: {
      placed: true,
      clicked: false,
    }
  }));
  */

};

export default PlaceCard;