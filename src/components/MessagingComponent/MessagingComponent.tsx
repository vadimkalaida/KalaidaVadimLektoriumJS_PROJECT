import React, {useEffect, useState} from 'react';
import { MessagingBlock, MessagingBottom, MessagingInput, MessagingButton, Messages, MessagesLeft, MessagesRight } from './elements'

const MessagingComponent : React.FC<{ conversationUser : Array<object> }> = ( conversationUser) => {
  const [ friend, setFriend ] : React.ComponentState = useState(conversationUser);
  const [ message, setMessage ] : React.ComponentState = useState('');
  const [ userMessagesArray, setUserMessagesArray ] : React.ComponentState = useState([]);

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
    }
  };

  return(
    <>
      <MessagingBlock>
        <MessagingBottom>
          <MessagingInput type='text' name='message' value={message} onChange={handleMessageChange} placeholder='Message...' />
          <MessagingButton onClick={addMessage}>Submit</MessagingButton>
        </MessagingBottom>
        <Messages>
          <MessagesLeft>
          </MessagesLeft>
          <MessagesRight>
            { userMessagesArray.map( ( item : any, index : number ) => <p key={ index }>{ item }</p> ) }
          </MessagesRight>
        </Messages>
      </MessagingBlock>
    </>
  );
};

export default MessagingComponent;