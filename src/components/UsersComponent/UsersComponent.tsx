import React, {useState} from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import {
  FindUserButton,
  FindUserForm, FindUserInput,
  FindUserTitle,
  FoundUserInfoParagraph,
  FoundUserParagraph, FoundUsersBlock,
  UserInfoBlock, UserNotFound
} from "./elements";

const UsersComponent : React.FC = () => {
  const [ findUserName, setFindUserName ] : React.ComponentState = useState('');
  const [ foundUser, setFoundUser ] : React.ComponentState = useState([]);
  const [ showUsersNumber, setShowUsersNumber ] : React.ComponentState = useState(0);
  const [ showUsersInfoNumber, setShowUsersInfoNumber ] : React.ComponentState = useState(0);
  const [ userInfo, setUserInfo ] : React.ComponentState = useState([]);

  const handleFindUserNameChange = (e : any) => {
    setFindUserName(e.target.value);
  };

  const findUser = (e : any) => {
    e.preventDefault();

    if(findUserName.length >= 1) {
      let unparsedUsers : any = localStorage.getItem('users'),
        users = JSON.parse(unparsedUsers),
        foundUsers = [],
        findUserNumber = 0,
        loggedInUserId = localStorage.getItem('lektorium_login_user_id');

      for(let i : number = 0; i < users.length; i++) {
        findUserNumber = 0;
        if(users[i]._id !== loggedInUserId) {
          for(let j : number = 0; j < findUserName.length; j++) {
            if(findUserName[j] === users[i].name[j]) {
              findUserNumber = 1;
            } else {
              findUserNumber = 0;
              j = findUserName.length - 1;
            }
          }
          if(findUserNumber === 1) {
            foundUsers.push(users[i]);
          }
        }
      }

      console.log(foundUsers);
      if(foundUsers.length !== 0) {
        setShowUsersNumber(1);
        setFoundUser(foundUsers);
      } else {
        setShowUsersNumber(2);
      }

    } else {
      alert('Input is empty!');
    }

  };

  const showUsers = () => {
    return(
      <>
        { foundUser.map( (item : any, index : number) => <FoundUserParagraph onClick={() => {
          setUserInfo([item]);
          setShowUsersInfoNumber(1);
        }} key={index}>{item.name}</FoundUserParagraph> ) }
      </>
    );
  };

  const showUserInfo = () => {
    return(
      <>
        { userInfo.map( (item : any, index : number) => <UserInfoBlock key={index}>
          <FindUserTitle>User Information</FindUserTitle>
          <FoundUserInfoParagraph>Name: <span>{item.name}</span></FoundUserInfoParagraph>
          <FoundUserInfoParagraph>Description: <span>{item.description}</span></FoundUserInfoParagraph>
          <FoundUserInfoParagraph>Organization: <span>{item.organization}</span></FoundUserInfoParagraph>
          <FoundUserInfoParagraph>Address: <span>{item.address}</span></FoundUserInfoParagraph>
          <FoundUserInfoParagraph>Email: <span>{item.email}</span></FoundUserInfoParagraph>
          <FoundUserInfoParagraph>Phone: <span>{item.phone}</span></FoundUserInfoParagraph>

        </UserInfoBlock> ) }
      </>
    );
  };

  const usersInformation = () => {
    return(
      <>
        <FindUserForm>
          <FindUserTitle>Find User</FindUserTitle>
          <FindUserInput type={'text'} name={'findUser'} onChange={handleFindUserNameChange} value={findUserName} placeholder={'Name of user...'} />
          <FindUserButton onClick={findUser}>Find User</FindUserButton>
        </FindUserForm>
        <FoundUsersBlock>
          <FindUserTitle>Users</FindUserTitle>
          { showUsersNumber === 1 ? showUsers() : null }
          { showUsersNumber === 2 ? <UserNotFound>User not found</UserNotFound> : null }
        </FoundUsersBlock>
        { showUsersInfoNumber === 1 ? showUserInfo() : null }
      </>
    );
  };

  return(
    <>
      <HeaderComponent buttonTextColorProps={'#F01FFF'} pageNameProps={'users'} buttonBackgroundProps={'#3D1F6F'} />
      { usersInformation() }
    </>
  );
};

export default UsersComponent;