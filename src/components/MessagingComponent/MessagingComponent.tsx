import React, {useEffect, useState} from 'react';
import { MessagingBlock, MessagingBottom, MessagingInput, MessagingButton, Messages,
  MessagesLeft, MessagesRight, LeftMessage, FriendAvatar, FriendContent, MessageName,
  MessageDate, MessageText, RightMessage, UserAvatar, UserContent } from './elements'

const MessagingComponent : React.FC<{ conversationUser : Array<object> }> = ( conversationUser) => {
  const [ friend, setFriend ] : React.ComponentState = useState(conversationUser);
  const [ message, setMessage ] : React.ComponentState = useState('');
  const [ userMessagesArray, setUserMessagesArray ] : React.ComponentState = useState([]);
  const [ friendMessagesArray, setFriendMessagesArray ] : React.ComponentState = useState([]);
  let unparsedUser : any = localStorage.getItem('user');
  let user = JSON.parse(unparsedUser);

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
                <MessageText style={{background: 'rgba(28,198,253, .9)'}}>
                  <p>{ localStorage.getItem('firstMessageOfFriend') }</p>
                </MessageText>
              </FriendContent>
            </LeftMessage>

            { friendMessagesArray.map( ( item : any, index : number ) => {
              if(item.length > 0) {
                return(
                  <LeftMessage key={ index }>
                    <FriendAvatar></FriendAvatar>
                    <FriendContent>
                      <MessageName>{ friend.conversationUser[0].name }</MessageName>
                      <MessageDate>{ new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</MessageDate>
                      <MessageText style={{background: 'rgba(28,198,253, .9)'}}>
                        <p>{ item }</p>
                      </MessageText>
                    </FriendContent>
                  </LeftMessage>
                );
              } else {
                return(
                  <LeftMessage style={{opacity: 0}} key={ index }>
                    <FriendAvatar></FriendAvatar>
                    <FriendContent>
                      <MessageName>{ friend.conversationUser[0].name }</MessageName>
                      <MessageDate>{ new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</MessageDate>
                      <MessageText style={{background: 'rgba(28,198,253, .9)'}}>
                        <p>{ item }</p>
                      </MessageText>
                    </FriendContent>
                  </LeftMessage>
                );
              }
            } ) }

          </MessagesLeft>

          <MessagesRight>
            { userMessagesArray.map( ( item : any, index : number ) => <RightMessage key={ index }>
              <UserAvatar></UserAvatar>
              <UserContent>
                <MessageName>{ user[0].name }</MessageName>
                <MessageDate>{ new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</MessageDate>
                <MessageText style={{background: 'rgba(44,185,169, .9)'}}>
                  <p>{ item }</p>
                </MessageText>
              </UserContent>
            </RightMessage> ) }
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