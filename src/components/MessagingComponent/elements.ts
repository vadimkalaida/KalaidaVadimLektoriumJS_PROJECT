import styled from 'styled-components';

export const MessagingBlock = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  margin-bottom: 50px;
`;

export const MessagingBottom = styled.form`
  width: 100%;
  height: 75px;
  display: flex;
  border-radius: 15px;
`;

export const MessagingInput = styled.input`
  width: 75%;
  height: 75px;
  background: transparent;
  outline: none;
  border: 2px solid #19B1FC;
  border-bottom-left-radius: 15px;
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
  height: 425px;
  overflow: auto;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const MessagesLeft = styled.div`
  width: 50%;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const MessagesRight = styled.div`
  width: 50%;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;