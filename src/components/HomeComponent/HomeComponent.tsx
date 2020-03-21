import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ErrorBlock } from "../../elements";
import { MainHomeBlock, Header, HomeParagraph } from "./styles/elements";
import { UserInfoParagraph, UserInfoLink } from "./styles/infoOfUserBlockElements";
import { ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid } from 'recharts';

const HomeComponent = () => {
  const [ showBlock, setShowBlock ] : React.ComponentState = useState('home');
  const [ homeButtonColor, setHomeButtonColor ] : React.ComponentState = useState({background: '#0078D7', color: '#fff'});
  const [ formConstructorButtonColor, setFormConstructorButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  const [ userInfoButtonColor, setUserInfoButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  let userLoggedIN : any = sessionStorage.getItem('userLoggedIN');
  const barData = [
    {
      name: '2015',
      uv: 900
    },
    {
      name: '2016',
      uv: 1100
    },
    {
      name: '2017',
      uv: 1500
    },
    {
      name: '2018',
      uv: 2000
    },
    {
      name: '2019',
      uv: 2700
    },
    {
      name: '2020',
      uv: 3300
    }
  ];

  const homeBlockContent = () => {
    return(
      <>
        <HomeParagraph>Users Statistic</HomeParagraph>
        <ResponsiveContainer width={700}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke={'#0F79D5'} />
            <CartesianGrid horizontal={true} vertical={false} stroke="#0F79D5" />
            <Bar dataKey="uv" barSize={50} fill="#0F79D5"/>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  };

  const formConstructorBlock = () => {
    return(
      <>
      </>
    );
  };

  const infoOfUserBlock = () => {
    let unparsedUsersArray : any = localStorage.getItem('users'),
      usersArray = JSON.parse(unparsedUsersArray),
      userId = localStorage.getItem('lektorium_login_user_id'),
      userInfo;

    for(let i : number = 0; i < usersArray.length; i++) {
      if(usersArray[i]._id === userId) {
        userInfo = usersArray[i];
      }
    }

    return(
      <>
        <UserInfoParagraph>Name: <span>{ userInfo.name }</span></UserInfoParagraph>
        <UserInfoParagraph>Description: <span>{ userInfo.description }</span></UserInfoParagraph>
        <UserInfoParagraph>Organization: <span>{ userInfo.organization }</span></UserInfoParagraph>
        <UserInfoParagraph>Address: <span>{ userInfo.address }</span></UserInfoParagraph>
        <UserInfoParagraph>Email: <span>{ userInfo.email }</span></UserInfoParagraph>
        <UserInfoParagraph>Phone: <span>{ userInfo.phone }</span></UserInfoParagraph>
        <UserInfoLink><Link to={'/resetPass'}>Change Password</Link></UserInfoLink>
      </>
    );
  };

  const mainHomeBlock = () => {
    return(
      <MainHomeBlock>
        <Header>
          <button style={homeButtonColor} onClick={() => {
            setShowBlock('home');
            setHomeButtonColor({background: '#0078D7', color: '#fff'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>Home</button>
          <button style={formConstructorButtonColor} onClick={() => {
            setShowBlock('form_constructor');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: '#0078D7', color: '#fff'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>Form Constructor</button>
          <button style={userInfoButtonColor} onClick={() => {
            setShowBlock('info_of_user');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: '#0078D7', color: '#fff'});
          }}>User Info</button>
        </Header>
        { showBlock === 'home' ? homeBlockContent() : null }
        { showBlock === 'form_constructor' ? formConstructorBlock() : null }
        { showBlock === 'info_of_user' ? infoOfUserBlock() : null }
      </MainHomeBlock>
    )
  };

  const loginAccount = () => {
    return(
      <ErrorBlock>
        <Link to={'/'}>Please login to your account.</Link>
      </ErrorBlock>
    );
  };

  return(
    <>
      { userLoggedIN === 0 ? loginAccount() : mainHomeBlock() }
    </>
  );
};

export default HomeComponent;