import React from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import LoginComponent from "./components/LoginComponent/LoginComponent";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent";
import ResetPasswordComponent from "./components/ResetPasswordComponent/RestPasswordComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { AppBlock } from "./elements";

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
          </Switch>
        </Router>
      </div>
    </AppBlock>
  );
}

export default App;
