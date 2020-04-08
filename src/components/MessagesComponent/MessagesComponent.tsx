import React from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const MessagesComponent : React.FC = () => {

  const messagesContent = () => {
    return(
      <>
        <HeaderComponent pageNameProps={'messages'} />
        Messages
      </>
    );
  };

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : messagesContent() }
    </>
  );
};

export default MessagesComponent;