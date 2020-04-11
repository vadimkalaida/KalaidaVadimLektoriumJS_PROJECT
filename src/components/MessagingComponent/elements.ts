import styled from 'styled-components';

export const MessagingBlock = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  overflow-y: auto;
`;

export const MessagingBottom = styled.form`
  width: 1000px;
  height: 75px;
  display: flex;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  border-radius: 15px;
  margin-bottom: 50px;
`;

export const MessagingInput = styled.input`
  width: 75%;
  height: 75px;
  background: transparent;
  outline: none;
  border: 2px solid #19B1FC;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding-left: 15px;
  font-size: 18px;
  color: #19B1FC;
  &::placeholder {
    color: rgba(25,177,252, .5);
  }
`;

export const MessagingButton = styled.button`
  width: 25%;
  height: 75px;
  background: #19B1FC;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #2D2F30;
  font-size: 20px;
  font-weight: 800;
  transition: .2s;
  &:hover {
    background: #2D2F30;
    color: #19B1FC;
  }
  &:active {
    background: #19B1FC;
    color: #2D2F30;
  }
`;

export const Messages = styled.div`
  width: 100%;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const MessagesLeft = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const LeftMessage = styled.div`
  max-width: 350px;
  min-height: 50px;
  display: flex;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 100px;
`;

export const FriendAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1176FC;
`;

export const FriendContent = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 10px;
`;

export const MessagesRight = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

export const RightMessage = styled.div`
  max-width: 350px;
  min-height: 50px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  text-align: right;
  margin-right: 25px;
  margin-top: 25px;
  margin-bottom: 100px;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1CC6FD;
  margin-left: 10px;
`;

export const UserContent = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10px;
`;

export const MessageName = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #1B78F9;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const MessageDate = styled.p`
  font-size: 13px;
  font-weight: 800;
  color: rgba(38,178,250, .5);
  margin-top: 0;
`;

export const MessageText = styled.div`
  max-width: 280px;
  
  border-radius: 15px;
  text-align: left;
  & p {
    max-width: 250px;
    color: #333536;
    font-size: 16px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 13px;
    padding-right: 13px;
  }
`;


