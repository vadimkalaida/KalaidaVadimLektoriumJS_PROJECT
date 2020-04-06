import React, { useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FlexImg, VideoBlock } from "./elements";
import ReactPlayer from 'react-player'
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const FlexComponent = () => {
  const [ showGiphNumber, setShowGiphNumber ] = useState(1);

  setInterval(() => {
    if( showGiphNumber < 3 ) {
      setShowGiphNumber(showGiphNumber + 1);
    } else {
      setShowGiphNumber(1);
    }
  }, 10000);

  const showFlex = () => {
    return(
      <>
        <HeaderComponent pageNameProps={'flex'} buttonBackgroundProps={'#1ED05D'} />
        { showGiphNumber === 1 ? <FlexImg src="https://i.giphy.com/media/13FzDAoxlBesgM/giphy.webp" alt="Kek dancer"/> : null }
        { showGiphNumber === 2 ? <FlexImg src="https://i.giphy.com/media/Jb56O0QSZRopG/giphy.webp" alt="Kek dancer"/> : null }
        { showGiphNumber === 3 ? <FlexImg src="https://media3.giphy.com/media/3zSaOGAwLHhxC/giphy.gif?cid=ecf05e47f64cc31222f0ca3df1b875665f8ace4335fcc56f&rid=giphy.gif" alt="Kek dancer"/> : null }
        <VideoBlock style={{display: 'none'}}>
          <ReactPlayer url={'https://soundcloud.com/mikkel-roed-767734565/1-hour-of-shreksophone'} volume={0.1} playing={true} loop={true} />
        </VideoBlock>
      </>
    );
  };

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : showFlex() }
    </>
  );
};

export default FlexComponent;