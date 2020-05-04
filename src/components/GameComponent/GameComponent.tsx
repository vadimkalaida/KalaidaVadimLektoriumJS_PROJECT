import React, {useEffect, useState, useRef} from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import galahad from './images/GallahadHeader.png';
import galahadWithGun from './images/GalahadWithGun.png';
import werewolf from './images/PolukrovkaHead.png';
import gun from './images/gun.png';
import { GameMainBlock, GameInfo, StartGame, GameArena, GameCharacter, GameTimerParagraph, GameGunImage } from './elements'

const GameComponent : React.FC = () => {
  let unsortedPosY : any = sessionStorage.getItem('posY');
  let topPos = JSON.parse(unsortedPosY);
  let unsortedPosX : any = sessionStorage.getItem('posX');
  let leftPos = JSON.parse(unsortedPosX);
  let unsortedWereWolfPosY : any = sessionStorage.getItem('werewolf_posY');
  let wereWolfTopPos = JSON.parse(unsortedWereWolfPosY);
  let unsortedWereWolfPosX : any = sessionStorage.getItem('werewolf_posX');
  let wereWolfLeftPos = JSON.parse(unsortedWereWolfPosX);

  const [ showContentNumber, setShowContentNumber ] : React.ComponentState = useState('1');
  const [ galahadImage, setGalahadImage ] : React.ComponentState = useState(galahad);
  const [ getWeaponNumber, setGetWeaponNumber ] : React.ComponentState = useState(0);
  const [ topPosGun, setTopPosGun ] : React.ComponentState = useState(0);
  const [ leftPosGun, setLeftPosGun ] : React.ComponentState = useState(0);
  const [ topGalahadPressed, setTopGalahadPressed ] : React.ComponentState = useState(false);
  const [ bottomGalahadPressed, setBottomGalahadPressed ] : React.ComponentState = useState(false);
  const [ leftGalahadPressed, setLeftGalahadPressed ] : React.ComponentState = useState(false);
  const [ rightGalahadPressed, setRightGalahadPressed ] : React.ComponentState = useState(false);
  const [ topWereWolfPressed, setTopWereWolfPressed ] : React.ComponentState = useState(false);
  const [ bottomWereWolfPressed, setBottomWereWolfPressed ] : React.ComponentState = useState(false);
  const [ leftWereWolfPressed, setLeftWereWolfPressed ] : React.ComponentState = useState(false);
  const [ rightWereWolfPressed, setRightWereWolfPressed ] : React.ComponentState = useState(false);
  const [ gameTime, setGameTime ] : React.ComponentState = useState(0);
  const [ gameTimeWithGun, setGameTimeWithGun ] : React.ComponentState = useState(0);
  const [ showTimeMessageNumber, setShowTimeMessageNumber ] : React.ComponentState = useState(0);
  const [ showGunNumber, setShowGunNumber ] : React.ComponentState = useState(0);
  const [ restartNumber, setRestartNumber ] : React.ComponentState = useState(0);
  const [ galahadZIndex, setGalahadZIndex ] : React.ComponentState = useState(0);


  const moveGalahad = (e : any) => {
    if(e.keyCode === 38) {
      setTopGalahadPressed(true);
    }
    if(e.keyCode === 40) {
      setBottomGalahadPressed(true);
    }
    if(e.keyCode === 37) {
      setLeftGalahadPressed(true);
    }
    if (e.keyCode === 39) {
      setRightGalahadPressed(true);
    }
  };

  const notMoveGalahad = (e : any) => {
    if(e.keyCode === 38) {
      setTopGalahadPressed(false);
    }
    if(e.keyCode === 40) {
      setBottomGalahadPressed(false);
    }
    if(e.keyCode === 37) {
      setLeftGalahadPressed(false);
    }
    if (e.keyCode === 39) {
      setRightGalahadPressed(false);
    }
  };
  const moveWereWolf = (e : any) => {
    if(e.keyCode === 87) {
      setTopWereWolfPressed(true);
    }
    if(e.keyCode === 83) {
      setBottomWereWolfPressed(true);
    }
    if(e.keyCode === 65) {
      setLeftWereWolfPressed(true);
    }
    if (e.keyCode === 68) {
      setRightWereWolfPressed(true);
    }
  };

  const notMoveWereWolf = (e : any) => {
    if(e.keyCode === 87) {
      setTopWereWolfPressed(false);
    }
    if(e.keyCode === 83) {
      setBottomWereWolfPressed(false);
    }
    if(e.keyCode === 65) {
      setLeftWereWolfPressed(false);
    }
    if (e.keyCode === 68) {
      setRightWereWolfPressed(false);
    }
  };


  // game timer useEffect
  useEffect(() => {
    if(showContentNumber === '2' && gameTime <= 12) {
      setTimeout(() => {
        setGameTime(gameTime + 1);
      }, 1000);
    }

    if(gameTime >= 12) {
      setShowTimeMessageNumber(1);
    } else {
      setShowTimeMessageNumber(0);
    }


  }, [ gameTime, showContentNumber ]);


  // control useEffect
  useEffect(() => {
    let unsortedPosY : any = sessionStorage.getItem('posY');
    let topPos = JSON.parse(unsortedPosY);
    let unsortedPosX : any = sessionStorage.getItem('posX');
    let leftPos = JSON.parse(unsortedPosX);
    let unsortedWereWolfPosY : any = sessionStorage.getItem('werewolf_posY');
    let wereWolfTopPos = JSON.parse(unsortedWereWolfPosY);
    let unsortedWereWolfPosX : any = sessionStorage.getItem('werewolf_posX');
    let wereWolfLeftPos = JSON.parse(unsortedWereWolfPosX);

    if(topGalahadPressed === true) {
      if(topPos > 9) {
        topPos -= 10;
        sessionStorage.setItem('posY', topPos);
      }
    }
    if(bottomGalahadPressed === true) {
      if(topPos < 624) {
        topPos += 10;
        sessionStorage.setItem('posY', topPos);
      }
    }
    if(leftGalahadPressed === true) {
      if(leftPos > 9) {
        leftPos -= 10;
        sessionStorage.setItem('posX', leftPos);
      }
    }
    if(rightGalahadPressed === true) {
      if(leftPos < 934) {
        leftPos += 10;
        sessionStorage.setItem('posX', leftPos);
      }
    }

    document.addEventListener("keydown", moveGalahad, false);
    document.addEventListener("keyup", notMoveGalahad, false);


    if(topWereWolfPressed === true) {
      if(wereWolfTopPos > 9) {
        wereWolfTopPos -= 10;
        sessionStorage.setItem('werewolf_posY', wereWolfTopPos);
      }
    }
    if(bottomWereWolfPressed === true) {
      if(wereWolfTopPos < 624) {
        wereWolfTopPos += 10;
        sessionStorage.setItem('werewolf_posY', wereWolfTopPos);
      }
    }
    if(leftWereWolfPressed === true) {
      if(wereWolfLeftPos > 9) {
        wereWolfLeftPos -= 10;
        sessionStorage.setItem('werewolf_posX', wereWolfLeftPos);
      }
    }
    if(rightWereWolfPressed === true) {
      if(wereWolfLeftPos < 934) {
        wereWolfLeftPos += 10;
        sessionStorage.setItem('werewolf_posX', wereWolfLeftPos);
      }
    }

    document.addEventListener("keydown", moveWereWolf, false);
    document.addEventListener("keyup", notMoveWereWolf, false);

  }, [ topGalahadPressed, bottomGalahadPressed, leftGalahadPressed, rightGalahadPressed, topWereWolfPressed, bottomWereWolfPressed, leftWereWolfPressed, rightWereWolfPressed]);



  //death useEffect
  useEffect(() => {
    if(topGalahadPressed === true || bottomGalahadPressed === true || leftGalahadPressed === true || rightGalahadPressed === true ||
      topWereWolfPressed === true || bottomWereWolfPressed === true || leftWereWolfPressed === true || rightGalahadPressed === true) {
      if(wereWolfTopPos >= (topPos - 55) && wereWolfTopPos <= (topPos + 55)) {
        if(wereWolfLeftPos >= (leftPos - 38) && wereWolfLeftPos <= (leftPos + 38) && restartNumber < 1) {
          alert('Galahad is dead');
          setRestartNumber(restartNumber + 1);
          document.location.reload();
        }
      }
    }
  });



  //weapon useEffect
  useEffect(() => {
    if(gameTime >= 12 && getWeaponNumber === 0) {
      setShowGunNumber(1);
      if(topPos >= (topPosGun - 50) && topPos <= (topPosGun + 30)) {
        if(leftPos >= (leftPosGun - 30) && leftPos <= (leftPosGun + 45)) {
          setGetWeaponNumber(1);
          setShowGunNumber(0);
        }
      }
    } else {
      setShowGunNumber(0);
    }

    if(getWeaponNumber === 1) {
      setGalahadImage(galahadWithGun);
      setShowTimeMessageNumber(2);
      setGalahadZIndex(9999999);
    } else {
      setGalahadImage(galahad);
      setGalahadZIndex(0);
    }
  });


  const ShowGame = () => {

    return(
      <>
        <GameTimerParagraph>
          { showTimeMessageNumber === 0 ? `Timer: ${gameTime} seconds` : null }
          { showTimeMessageNumber === 1 ? <span>Time to kill Werewolf</span> : null }
          { showTimeMessageNumber === 2 ? `Timer with gun: ${gameTimeWithGun} seconds` : null }
        </GameTimerParagraph>
        <GameArena>
          <GameCharacter style={{left: leftPos, top: topPos, zIndex: galahadZIndex}} src={galahadImage} alt="Galahad" />
          <GameCharacter style={{left: wereWolfLeftPos, top: wereWolfTopPos}} src={werewolf} alt="Werewolf" />
          { showGunNumber === 1 ? <GameGunImage style={{left: leftPosGun, top: topPosGun, zIndex: 0}} src={gun} alt="gun"/> : null }
        </GameArena>
      </>
    );
  };

  const showGameContent = () => {
    return(
      <>
        <HeaderComponent pageNameProps={'game'} />
          { showContentNumber === '2' ? ShowGame() : <GameMainBlock>
            <GameInfo>
              <span>Knights of the Round Table</span> is set in an alternate history 1886 London, where an old Order of Knights keep the world safe from half breed monsters,
              which are a combination of animal and human. In the game's history, around the seventh or eighth century, a small number of humans took on bestial traits.<br />
              <span>You are sir Galahad and you should kill werewolf!</span>
            </GameInfo>
            <StartGame onClick={() => {
              let posY : number = Math.ceil(Math.random() * 600);
              let posX : number = Math.ceil(Math.random() * 900);
              let wereWolfPosY : number = Math.ceil(Math.random() * 600);
              let wereWolfPosX : number = Math.ceil(Math.random() * 900);
              setLeftPosGun(Math.ceil(Math.random() * 900));
              setTopPosGun(Math.ceil(Math.random() * 600));

              if(wereWolfPosX === posX) {
                wereWolfPosX = Math.ceil(Math.random() * 900);
              }

              if(wereWolfPosY === posY) {
                wereWolfPosY = Math.ceil(Math.random() * 600);
              }

              if(leftPosGun === wereWolfPosX || leftPosGun === posX) {
                setLeftPosGun(Math.ceil(Math.random() * 900));
              }

              if(topPosGun === wereWolfPosY || topPosGun === posY) {
                setTopPosGun(Math.ceil(Math.random() * 600));
              }

              sessionStorage.setItem('posY', JSON.stringify(posY));
              sessionStorage.setItem('posX', JSON.stringify(posX));
              sessionStorage.setItem('werewolf_posY', JSON.stringify(wereWolfPosY));
              sessionStorage.setItem('werewolf_posX', JSON.stringify(wereWolfPosX));

              alert('W/A/S/D - Werewolf; Arrows - Galahad!');

              setShowContentNumber('2');
            }}>Start</StartGame>
          </GameMainBlock> }
      </>
    );
  };

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : showGameContent() }
    </>
  );
};

export default GameComponent;