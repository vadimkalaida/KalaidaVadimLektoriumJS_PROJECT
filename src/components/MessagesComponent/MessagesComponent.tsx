import React, { useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { ConversationBlock, NewConversation, InfoOfUser, InfoOfUserParagraph } from './elements'
import MessagingComponent from "../MessagingComponent/MessagingComponent";

const MessagesComponent : React.FC = () => {
  const [ foundUserForConversation, setFoundUserForConversation ] : React.ComponentState = useState([]);
  const [ showInfoNumber, setShowInfoNumber ] : React.ComponentState = useState('0');
  const [ showMessagesNumber, setShowMessagesNumber ] : React.ComponentState = useState('');

  const randomConversation = ( e : any ) => {
    e.preventDefault();

    let unparsedUsers : any = localStorage.getItem('users');
    let users = JSON.parse(unparsedUsers);
    let foundUser = [];
    let userId = localStorage.getItem('lektorium_login_user_id');

    foundUser.push(users[Math.floor(Math.random() * users.length)]);

    if(foundUser[0]._id === userId) {
      foundUser[0] = users[Math.floor(Math.random() * users.length)];
    }

    setFoundUserForConversation(foundUser);
    setShowInfoNumber('1');
    setShowMessagesNumber(showMessagesNumber + 'a');

  };

  const showInfoOfUser = () => {
    return(
      <>
        { foundUserForConversation.map( ( item : any, index : number ) => <InfoOfUser key={index}>
          <InfoOfUserParagraph>Name : <span>{ item.name } </span></InfoOfUserParagraph>
          <InfoOfUserParagraph>Description: <span>{ item.description } </span></InfoOfUserParagraph>
          <InfoOfUserParagraph>Organization: <span>{ item.organization } </span></InfoOfUserParagraph>
          <InfoOfUserParagraph>Address: <span>{ item.address } </span></InfoOfUserParagraph>
          <InfoOfUserParagraph>Email: <span>{ item.email } </span></InfoOfUserParagraph>
          <InfoOfUserParagraph>Phone: <span>{ item.phone } </span></InfoOfUserParagraph>
        </InfoOfUser> ) }
      </>
    );
  };

  const messagesContent = () => {
    return(
      <>
        <HeaderComponent pageNameProps={'messages'} />
        <ConversationBlock>
          { showInfoNumber === '1' ? showInfoOfUser() : null }
          { showInfoNumber === '0' ? <NewConversation onClick={randomConversation}>New Conversation</NewConversation> : null }
        </ConversationBlock>
        { showInfoNumber === '1' ? <MessagingComponent conversationUser={foundUserForConversation} /> : null }
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