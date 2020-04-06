import React, {useEffect, useState} from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import {
  AddToDoBlock,
  AddToDoButton,
  AddToDoButtonBlocker,
  AddToDoInput,
  AddToDoTitle, ToDoItem, ToDoItemsBlock
} from "./elements";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const ToDoComponent : React.FC = () => {
  let unparsedTodoArray : any = localStorage.getItem('lektorium_todo_list');

  const [ todoArray, setTodoArray ] : React.ComponentState = useState([]);
  const [ todoArrayLength, setTodoArrayLength ] : React.ComponentState = useState(todoArray.length);
  const [ todoButtonBlocker, setTodoButtonBlocker ] : React.ComponentState = useState(1);
  const [ todoItemsChecked, setTodoItemsChecked ] : React.ComponentState = useState(0);
  const [ todoContent, setTodoContent ] : React.ComponentState = useState('');

  const handleToDoItemContentChange = (e : any) => {
    setTodoContent(e.target.value);
  };

  useEffect(() => {
    if(localStorage.getItem('lektorium_todo_list')) {
      setTodoArray(JSON.parse(unparsedTodoArray));
    } else {
      setTodoArray([]);
    }

    if(todoContent.length < 1) {
      setTodoButtonBlocker(1);
    } else {
      setTodoButtonBlocker(0);
    }
  }, [todoContent, unparsedTodoArray]);

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
        <HeaderComponent buttonTextColorProps={'#6EE1E2'} pageNameProps={'todo'} buttonBackgroundProps={'#005D5E'} />
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

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : toDoList() }
    </>
  );
};

export default ToDoComponent;