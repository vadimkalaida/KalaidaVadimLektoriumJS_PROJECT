import styled from 'styled-components';

export const AddToDoBlock = styled.form`
  width: 700px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #0F79D5;
  border: 2px solid #002B87;
  margin-bottom: 30px;
  position: relative;
`;

export const AddToDoTitle = styled.p`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 22px;
  color: #002B87;
  font-weight: 800;
`;

export const AddToDoInput = styled.input`
  width: 85%;
  height: 50px;
  outline: none;
  background: #fff;
  font-size: 22px;
  padding-left: 15px;
  color: #002B87;
  border: 2px solid #002B87;
  transition: .2s
`;

export const AddToDoButtonBlocker = styled.div`
  width: 150px;
  height: 60px;
  position: absolute;
  bottom: 50px;
`;

export const AddToDoButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
  background: #fff;
  color: #002B87;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  outline: none;
  transition: .2s;
  border: 2px solid #002B87;
  &:hover {
    background: #0F79D5;
    color: #fff;
  }
`;

export const ToDoItemsBlock = styled.div`
  width: 700px;
  min-height: 150px;
  background: #0F79D5;
  border: 2px solid #002B87;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ToDoItem = styled.div`
  width: 85%;
  background: #fff;
  border: 2px solid #002B87;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  & span {
    width: 15%;
    height: 100%;
    cursor: pointer;
    font-size: 32px;
  }
  & span *:hover {
    transition: .2s;
    color: #197AD3;
  }
  & p {
    width: 70%;
    color: #002B87;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1.2px;
    padding: 10px;
  }
`;
