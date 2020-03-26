import styled from 'styled-components'

export const AddToDoBlock = styled.form`
  width: 700px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 2px solid #5012DD;
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
  background: #005295;
  font-size: 22px;
  padding-left: 15px;
  color: #4FADD9;
  border: 2px solid #002B87;
  transition: .2s
`;

export const AddToDoButtonBlocker = styled.div`
  width: 150px;
  height: 70px;
  position: absolute;
  bottom: 45px;
`;

export const AddToDoButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
  background: #005295;
  color: #4FADD9;
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
  height: 350px;
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 2px solid #5012DD;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-y: auto;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
