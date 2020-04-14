import React, {useEffect, useState} from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import galahad from './images/GallahadHeader.png';
import werewolf from './images/PolukrovkaHead.png';
import { GameMainBlock, GameInfo, StartGame, GameArena, GameCharacter } from './elements'

const GameComponent : React.FC = () => {
  const [ showContentNumber, setShowContentNumber ] : React.ComponentState = useState('1');
  const [ leftPosGalahad, setLeftPosGalahad ] : React.ComponentState = useState(0);
  const [ topPosGalahad, setTopPosGalahad ] : React.ComponentState = useState(0);
  const [ leftPosWerewolf, setLeftPosWerewolf ] : React.ComponentState = useState(0);
  const [ topPosWerewolf, setTopPosWerewolf ] : React.ComponentState = useState(0);
  const [ changePosLeftWerewolfNumber, setChangePosLeftWerewolfNumber ] : React.ComponentState = useState(0);
  const [ changePosTopWerewolfNumber, setChangePosTopWerewolfNumber ] : React.ComponentState = useState(0);

  const moveGalahad = (e : any) => {
    if(e.keyCode === 38) {
      setTopPosGalahad(topPosGalahad - 20);
    }
    if(e.keyCode === 40) {
      setTopPosGalahad(topPosGalahad + 20);
    }
    if(e.keyCode === 37) {
      setLeftPosGalahad(leftPosGalahad - 20);
    }
    if (e.keyCode === 39) {
      setLeftPosGalahad(leftPosGalahad + 20);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", moveGalahad, false);
  });

  const ShowGame = () => {

    return(
      <>
        <GameArena>
          <GameCharacter style={{left: leftPosGalahad, top: topPosGalahad}} src={galahad} alt="Galahad" />
          <GameCharacter style={{left: leftPosWerewolf, top: topPosWerewolf}} src={werewolf} alt="Galahad" />
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
              setLeftPosGalahad(Math.ceil(Math.random() * 900));
              setTopPosGalahad(Math.ceil(Math.random() * 600));
              setLeftPosWerewolf(Math.ceil(Math.random() * 900));
              setTopPosWerewolf(Math.ceil(Math.random() * 600));

              if(leftPosWerewolf === leftPosGalahad) {
                setLeftPosWerewolf(Math.ceil(Math.random() * 600));
              }

              if(topPosWerewolf === topPosGalahad) {
                setTopPosWerewolf(Math.ceil(Math.random() * 600));
              }
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