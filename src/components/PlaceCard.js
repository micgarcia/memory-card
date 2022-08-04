import React, {useState, useEffect} from 'react';

const PlaceCard = ({names, position}) => {
  const info = {
    Dwight: {
      fullName: 'Dwight Schrute',
      picture: ''
    },
    Michael: {
      fullName: 'Michael Scott',
      picture: ''
    },
    Jim: {
      fullName: 'Jim Halpert',
      picture: ''
    },
    Pam: {
      fullName: 'Pam Beesly',
      picture: ''
    },
    Robert: {
      fullName: 'Robert California',
      picture: ''
    },
    Angela: {
      fullName: 'Angela Martin',
      picture: ''
    },
    Erin: {
      fullName: 'Erin Hannon',
      picture: ''
    },
    Kevin: {
      fullName: 'Kevin Malone',
      picture: ''
    },
    Gabe: {
      fullName: 'Gabe Lewis',
      picture: ''
    },
    Toby: {
      fullName: 'Toby Flenderson',
      picture: ''
    },
    Stanley: {
      fullName: 'Stanley Hudson',
      picture: ''
    },
    Ryan: {
      fullName: 'Ryan Howard',
      picture: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2012/June/120627/434210-120627-ent-bjnovak-vmed.jpg'
    }
  }

  let currentName = names[position];
  let currentPic = '';
  for (let char in info) {
    if (char === currentName){
      currentName = info[char].fullName;
      currentPic = info[char].picture;
    }
  }



  return (
    <div id="charContainer">
      <div id={currentName}>
        {currentName}
      </div>
      {/*<img src={currentPic} alt="" id={currentName}/>*/}

    </div>
  )

};

export default PlaceCard;