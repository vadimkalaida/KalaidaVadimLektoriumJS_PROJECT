import React, { useState } from 'react';
import { Header } from "./elements";
import { Link } from "react-router-dom";

const HeaderComponent : React.FC = () => {


  return(
    <Header>
      <button>
        <Link to={'/home'}>Home</Link>
      </button>
      <button>
        <Link to={'/todo'}>ToDo</Link>
      </button>
      <button>
        <Link to={'/form_constructor'}>Form Constructor</Link>
      </button>
      <button>
        <Link to={'/users'}>Users</Link>
      </button>
      <button>
        <Link to={'/projects'}>Projects</Link>
      </button>
      <button>
        <Link to={'/addProject'}>Add Project</Link>
      </button>
      <button>
        <Link to={'/user_info'}>User Info</Link>
      </button>
    </Header>
  );
};

export default HeaderComponent;