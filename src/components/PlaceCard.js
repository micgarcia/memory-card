import React, {useState, useEffect} from 'react';

const PlaceCard = ({names, position}) => {
  const info = {
    Dwight: {
      fullName: 'Dwight Schrute',
      picture: 'https://www.looper.com/img/gallery/the-untold-truth-of-dwight-schrute/intro-1562620300.jpg'
    },
    Michael: {
      fullName: 'Michael Scott',
      picture: 'https://static.wikia.nocookie.net/theoffice/images/9/96/Prisonmike.png'
    },
    Jim: {
      fullName: 'Jim Halpert',
      picture: 'https://cdn.mos.cms.futurecdn.net/T2f6qYG2zTzrAiDNwPF2eA.jpg'
    },
    Pam: {
      fullName: 'Pam Beesly',
      picture: 'https://images.thebrag.com/tb/uploads/2020/02/PAMHEAD-768x437.jpg'
    },
    Robert: {
      fullName: 'Robert California',
      picture: 'https://www.looper.com/img/gallery/the-reason-james-spader-didnt-return-for-the-final-season-of-the-office/intro-1571411241.jpg'
    },
    Angela: {
      fullName: 'Angela Martin',
      picture: 'https://assets-jpcust.jwpsrv.com/thumbnails/0zy3ubn9-640.jpg'
    },
    Erin: {
      fullName: 'Erin Hannon',
      picture: 'https://www.cheatsheet.com/wp-content/uploads/2020/12/Erin.jpg'
    },
    Kevin: {
      fullName: 'Kevin Malone',
      picture: 'https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2020/07/200716-kevin-office.png'
    },
    Gabe: {
      fullName: 'Gabe Lewis',
      picture: 'https://i.redd.it/u9o6pamy4sk01.png'
    },
    Toby: {
      fullName: 'Toby Flenderson',
      picture: 'https://i.pinimg.com/originals/86/38/33/863833b19e195f4e551136d7a09ecc02.jpg'
    },
    Stanley: {
      fullName: 'Stanley Hudson',
      picture: 'https://www.looper.com/img/gallery/the-stanley-detail-that-has-the-office-fans-scratching-their-heads/fans-are-confused-at-stanleys-career-choice-on-the-office-1622125056.jpg'
    },
    Ryan: {
      fullName: 'Ryan Howard',
      picture: 'https://medias.spotern.com/spots/w640/216/216889-1563782829.jpg'
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
    <div className="charContainer">
      <div id={currentName}>
        {currentName}
      </div>
      <img src={currentPic} alt="" id={currentName}/>

    </div>
  )

};

export default PlaceCard;