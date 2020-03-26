import styled from 'styled-components';

export const FindUserForm = styled.form`
  width: 700px;
  height: 250px;
  border: 2px solid #002B87;
  border-radius: 15px;
  background: #7F00FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const FindUserTitle = styled.p`
  color: #4D08AD;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 26px;
`;

export const FindUserInput = styled.input`
  width: 85%;
  height: 50px;
  outline: none;
  background: #4D08AD;
  border: none;
  padding-left: 15px;
  color: #9552F2;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;
  &::placeholder {
    color: rgba(149,82,242, .5);
  }
`;

export const FindUserButton = styled.button`
  width: 110px;
  height: 50px;
  background: #4D08AD;
  outline: none;
  border: none;
  color: #9552F2;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  transition: .2s;
  &:hover {
    border: 2px solid #4D08AD;
    background: #9550F5;
    color: #4D08AD;
  }
  &:active {
    background: #4D08AD;
    border: none;
    color: #9552F2;
  }
`;

export const FoundUsersBlock = styled.div`
  width: 700px;
  min-height: 250px;
  border: 2px solid #002B87;
  border-radius: 15px;
  background: #9550F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  background: #7F00FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const FoundUserParagraph = styled.p`
  font-weight: 800;
  font-size: 22px;
  color: #fff;
  letter-spacing: 1.25px;
  margin-top: 0;
  margin-bottom: 15px;
  cursor: pointer;
  transition: .2s;
  &:hover {
    color: #5D20BB;
  }
  &:active {
    color: #fff;
  }
`;

export const UserNotFound = styled.p`
  color: #002B87;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const UserInfoBlock = styled.div`
  width: 700px;
  min-height: 300px;
  border: 2px solid #002B87;
  border-radius: 15px;
  background: #9550F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  background: #7F00FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const FoundUserInfoParagraph = styled.p`
  color: #002B87;
  font-size: 22px;
  margin-top: 15px;
  & span {
    font-weight: 800;
    color: #fff;
  }
`;