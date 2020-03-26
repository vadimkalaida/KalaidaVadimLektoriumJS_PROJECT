import React from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import LoginComponent from "./components/LoginComponent/LoginComponent";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent";
import ResetPasswordComponent from "./components/ResetPasswordComponent/RestPasswordComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { AppBlock } from "./elements";
import AddProjectComponent from "./components/AddProjectComponent/AddProjectComponent";
import ToDoComponent from "./components/ToDoComponent/ToDoComponent";
import FormConstructorComponent from "./components/FormConstructorComponent/FormConstructorComponent";
import UsersComponent from "./components/UsersComponent/UsersComponent";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import UserInfoComponent from "./components/UserInfoComponent/UserInfoComponent";

function App() {
  return (
    <AppBlock>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ LoginComponent }/>
            <Route exact path='/register' component={ RegisterComponent }/>
            <Route exact path='/resetPass' component={ ResetPasswordComponent }/>
            <Route exact path='/home' component={ HomeComponent }/>
            <Route exact path='/addProject' component={ AddProjectComponent }/>
            <Route exact path='/todo' component={ ToDoComponent }/>
            <Route exact path='/form_constructor' component={ FormConstructorComponent }/>
            <Route exact path='/users' component={ UsersComponent }/>
            <Route exact path='/projects' component={ ProjectsComponent }/>
            <Route exact path='/user_info' component={ UserInfoComponent }/>
          </Switch>
        </Router>
      </div>
    </AppBlock>
  );
}

export default App;
