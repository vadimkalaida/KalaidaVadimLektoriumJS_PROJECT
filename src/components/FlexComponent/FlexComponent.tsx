import React from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FlexImg } from "./elements";
import ReactPlayer from 'react-player'

const FlexComponent = () => {
  return(
    <>
      <HeaderComponent pageNameProps={'flex'} />
      <FlexImg src="https://media.giphy.com/media/99CCKmb1SXpyU/giphy.gif" alt="Kek dancer"/>

    </>
  );
};

export default FlexComponent;