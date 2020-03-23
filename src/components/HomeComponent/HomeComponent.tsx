import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ErrorBlock } from "../../elements";
import { MainHomeBlock, Header, HomeParagraph } from "./styles/elements";
import { UserInfoParagraph, UserInfoLink } from "./styles/infoOfUserBlockElements";
import { AddToDoBlock, AddToDoTitle, AddToDoInput, AddToDoButtonBlocker, AddToDoButton, ToDoItemsBlock, ToDoItem } from "./styles/toDoElements";
import { ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid } from 'recharts';

const HomeComponent = () => {
  let unparsedTodoArray : any = localStorage.getItem('lektorium_todo_list'),
    parsedToDoArray;
  const [ showBlock, setShowBlock ] : React.ComponentState = useState('home');
  const [ homeButtonColor, setHomeButtonColor ] : React.ComponentState = useState({background: '#0078D7', color: '#fff'});
  const [ todoUsersButtonColor, setToDoUsersButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  const [ formConstructorButtonColor, setFormConstructorButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  const [ usersButtonColor, setUsersButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  const [ userInfoButtonColor, setUserInfoButtonColor ] : React.ComponentState = useState({background: 'transparent', color: '#000'});
  const [ todoArray, setTodoArray ] : React.ComponentState = useState([]);
  const [ todoArrayLength, setTodoArrayLength ] : React.ComponentState = useState(todoArray.length);
  const [ todoButtonBlocker, setTodoButtonBlocker ] : React.ComponentState = useState(1);
  const [ todoItemsChecked, setTodoItemsChecked ] : React.ComponentState = useState(0);
  const [ todoContent, setTodoContent ] : React.ComponentState = useState('');

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

  useEffect(() => {
    if(localStorage.getItem('lektorium_todo_list')) {
      setTodoArray(JSON.parse(unparsedTodoArray));
    } else {
      setTodoArray([]);
    }
  }, [unparsedTodoArray]);


  //Home Code Part (START)
  const homeBlockContent = () => {
    return(
      <>
        <HomeParagraph>Users Statistic</HomeParagraph>
        <ResponsiveContainer height={600} width={700}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke={'#0F79D5'} />
            <CartesianGrid horizontal={true} vertical={false} stroke="#0F79D5" />
            <Bar dataKey="uv" barSize={50} fill="#0F79D5"/>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  };
  //Home Code Part (END)



  //ToDo List Code Part (START)
  const handleToDoItemContentChange = (e : any) => {
    setTodoContent(e.target.value);
  };

  useEffect(() => {
    if(todoContent.length < 1) {
      setTodoButtonBlocker(1);
    } else {
      setTodoButtonBlocker(0);
    }
  }, [todoContent]);

  const addToDoItem = (e : any) => {
    e.preventDefault();

    todoArray.push(
      {
        content: todoContent,
        id: todoArray.length,
        checked: 'none',
        deleted: false
      }
    );

    localStorage.setItem('lektorium_todo_list', JSON.stringify(todoArray));

    setTodoContent('');
  };

  const toDoList = () => {

    return(
      <>
        <AddToDoBlock>
          <AddToDoTitle>Add ToDo Item</AddToDoTitle>
          <AddToDoInput type={'text'} name={'todo_item'} onChange={handleToDoItemContentChange} value={todoContent} placeholder={'Text...'} />
          { todoButtonBlocker === 0 ? null : <AddToDoButtonBlocker></AddToDoButtonBlocker> }
          <AddToDoButton onClick={addToDoItem}>Add ToDo</AddToDoButton>
        </AddToDoBlock>
        <ToDoItemsBlock>
          <AddToDoTitle>ToDo Items</AddToDoTitle>
          { todoArray.map( ( item : any,  index: any) => {
            if(item.deleted === false) {
              return (
                <ToDoItem key={index}>
                  <span onClick={() => {
                    if(item.checked === 'line-through') {
                      item.checked = 'none';
                    } else {
                      item.checked = 'line-through';
                    }
                    setTodoItemsChecked(todoItemsChecked + 1);
                    localStorage.setItem('lektorium_todo_list', JSON.stringify(todoArray));
                  }} style={{color: '#1ED760'}}><i className="fa fa-check" aria-hidden="true"></i></span>
                  <p style={{textDecoration: item.checked}}>{ item.content }</p>
                  <span onClick={() => {
                    item.deleted = true;
                    setTodoArrayLength(todoArrayLength - 1);
                    localStorage.setItem('lektorium_todo_list', JSON.stringify(todoArray));
                  }} style={{color: '#EE2356'}}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                </ToDoItem>
              );
            } else {
              return null;
            }
          } ) }
        </ToDoItemsBlock>
      </>
    );
  };
  //ToDo List Code Part (END)



  //Form Constructor Code Part (START)
  const formConstructorBlock = () => {
    return(
      <>
      </>
    );
  };
  //Form Constructor Code Part (END)



  //Users Information Code Part (START)
  const usersInformation = () => {
    return(
      <>
      </>
    );
  };
  //Users Information Code Part (END)



  //Info Of User Code Part (START)
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
  //Info Of User Code Part (END)



  const mainHomeBlock = () => {
    return(
      <MainHomeBlock>
        <Header>
          <button style={homeButtonColor} onClick={() => {
            setShowBlock('home');
            setHomeButtonColor({background: '#0078D7', color: '#fff'});
            setToDoUsersButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUsersButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>Home</button>
          <button style={todoUsersButtonColor} onClick={() => {
            setShowBlock('todo_list');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setToDoUsersButtonColor({background: '#0078D7', color: '#fff'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUsersButtonColor({background: 'transparent', color: '#000'});
            setUsersButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>ToDo</button>
          <button style={formConstructorButtonColor} onClick={() => {
            setShowBlock('form_constructor');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setToDoUsersButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: '#0078D7', color: '#fff'});
            setUsersButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>Form Constructor</button>
          <button style={usersButtonColor} onClick={() => {
            setShowBlock('users');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setToDoUsersButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUsersButtonColor({background: '#0078D7', color: '#fff'});
            setUserInfoButtonColor({background: 'transparent', color: '#000'});
          }}>Users</button>
          <button style={userInfoButtonColor} onClick={() => {
            setShowBlock('info_of_user');
            setHomeButtonColor({background: 'transparent', color: '#000'});
            setToDoUsersButtonColor({background: 'transparent', color: '#000'});
            setFormConstructorButtonColor({background: 'transparent', color: '#000'});
            setUsersButtonColor({background: 'transparent', color: '#000'});
            setUserInfoButtonColor({background: '#0078D7', color: '#fff'});
          }}>User Info</button>
        </Header>
        { showBlock === 'home' ? homeBlockContent() : null }
        { showBlock === 'todo_list' ? toDoList() : null }
        { showBlock === 'form_constructor' ? formConstructorBlock() : null }
        { showBlock === 'users' ? usersInformation() : null }
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