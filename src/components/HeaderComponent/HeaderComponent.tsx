import React from 'react';
import { Header } from "./elements";
import { Link } from "react-router-dom";

const HeaderComponent : React.FC<{ buttonTextColorProps? : string, pageNameProps : string, buttonBackgroundProps? : string }> = ( { buttonTextColorProps = '#B2FEFA', pageNameProps, buttonBackgroundProps = '#1D7473'  } ) => {
  const defaultStyleObject = { fontWeight: 800 };
  const styleBackgroundObject = {fontWeight: 800, background: buttonBackgroundProps };


  return(
    <Header>
      <button style={pageNameProps === 'home' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/home'}>Home</Link>
      </button>
      <button style={pageNameProps === 'todo' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/todo'}>ToDo</Link>
      </button>
      <button style={pageNameProps === 'form_constructor' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/form_constructor'}>Form Constructor</Link>
      </button>
      <button style={pageNameProps === 'users' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/users'}>Users</Link>
      </button>
      <button style={pageNameProps === 'projects' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/projects'}>Projects</Link>
      </button>
      <button style={pageNameProps === 'add_project' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/addProject'}>Add Project</Link>
      </button>
      <button style={pageNameProps === 'user_info' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/user_info'}>User Info</Link>
      </button>
      <button style={pageNameProps === 'flex' ? styleBackgroundObject : defaultStyleObject}>
        <Link style={{ color: buttonTextColorProps }} to={'/flex'}>Flex</Link>
      </button>
    </Header>
  );
};

export default HeaderComponent;