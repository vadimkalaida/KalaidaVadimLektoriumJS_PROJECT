import React from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FlexImg, VideoBlock } from "./elements";
import ReactPlayer from 'react-player'

const FlexComponent = () => {
  return(
    <>
      <HeaderComponent pageNameProps={'flex'} />
      <FlexImg src="https://i.giphy.com/media/13FzDAoxlBesgM/giphy.webp" alt="Kek dancer"/>
      <VideoBlock style={{display: 'none'}}>
        <ReactPlayer url={'https://soundcloud.com/mikkel-roed-767734565/1-hour-of-shreksophone'} volume={0.1} playing={true} loop={true} />
      </VideoBlock>
    </>
  );
};

export default FlexComponent;