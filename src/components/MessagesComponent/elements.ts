import styled from 'styled-components';

export const ConversationBlock = styled.div`
  width: 800px;
  min-height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
  margin-bottom: 50px;
`;

export const NewConversation = styled.button`
  width: 75%;
  height: 75px;
  outline: none;
  border: none;
  background: #333536;
  border: 2px solid #169DFC;
  color: #1BBFFC;
  font-weight: 800;
  font-size: 22px;
  cursor: pointer;
  transition: .2s;
  margin-bottom: 25px;
  &:hover {
    color: #282A2B;
    background: #169DFC;
    border: 2px solid #242627;
  }
`;

export const InfoOfUser = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InfoOfUserParagraph = styled.div`
  max-width: 75%;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 20px;
  & span {
    font-size: 24px;
  }
`;