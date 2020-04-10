import React, {useEffect, useState} from 'react';
import { MessagingBlock, MessagingBottom, MessagingInput, MessagingButton, Messages,
  MessagesLeft, MessagesRight, LeftMessage, FriendAvatar, FriendContent, MessageName,
  MessageDate, MessageText } from './elements'

const MessagingComponent : React.FC<{ conversationUser : Array<object> }> = ( conversationUser) => {
  const [ friend, setFriend ] : React.ComponentState = useState(conversationUser);
  const [ message, setMessage ] : React.ComponentState = useState('');
  const [ userMessagesArray, setUserMessagesArray ] : React.ComponentState = useState([]);
  const [ friendMessagesArray, setFriendMessagesArray ] : React.ComponentState = useState([]);

  const handleMessageChange = (e : any) => {
    setMessage(e.target.value);
  };

  const addMessage = (e : any) => {
    e.preventDefault();

    if(message.length < 1) {
      alert('Please, write a message...');
    } else {
      userMessagesArray.push(message);
      setMessage('');
      let yourFriendMessage = prompt('It\'s message of your friend');
      friendMessagesArray.push(yourFriendMessage);
    }

    console.log(friend.conversationUser[0]._id);
  };

  return(
    <>
      <MessagingBlock>
        <Messages>
          <MessagesLeft>
            <LeftMessage>
              <FriendAvatar></FriendAvatar>
              <FriendContent>
                <MessageName>{ friend.conversationUser[0].name }</MessageName>
                <MessageDate>{ new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</MessageDate>
                <MessageText>
                  <p>{ localStorage.getItem('firstMessageOfFriend') }</p>
                </MessageText>
              </FriendContent>
            </LeftMessage>
            { friendMessagesArray.map( ( item : any, index : number ) => <LeftMessage key={ index }>
              <FriendAvatar></FriendAvatar>
              <FriendContent>
                <MessageName>{ friend.conversationUser[0].name }</MessageName>
                <MessageDate>{ new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</MessageDate>
                <MessageText>
                  <p>{ item }</p>
                </MessageText>
              </FriendContent>
            </LeftMessage> ) }
          </MessagesLeft>
          <MessagesRight>
          </MessagesRight>
        </Messages>
      </MessagingBlock>
      <MessagingBottom>
        <MessagingInput type='text' name='message' value={message} onChange={handleMessageChange} placeholder='Message...' />
        <MessagingButton onClick={addMessage}>Submit</MessagingButton>
      </MessagingBottom>
    </>
  );
};

export default MessagingComponent;