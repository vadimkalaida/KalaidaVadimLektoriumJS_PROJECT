import React, { useState, useEffect } from 'react';
import { MainBlock, Title, Form, FormInput, FormError, FormButton, LoginBlocker, FormLink } from "../../elements";
import { GoToHomeLink } from "./elements";
import validator from "validator";
import { Link } from "react-router-dom";

const LoginComponent : React.FC = () => {
  const [ loginEmail, setLoginEmail ] : React.ComponentState = useState('');
  const [ loginPassword, setLoginPassword ] : React.ComponentState = useState('');
  const [ loginEmailError, setLoginEmailError ] : React.ComponentState = useState('');
  const [ loginPassError, setLoginPassError ] : React.ComponentState = useState('');
  const [ loginBlocker, setLoginBlocker] : React.ComponentState = useState(1);
  const [ showNumber, setShowNumber ] : React.ComponentState = useState(0);
  const testLetters : RegExp = /[a-zA-Z]/;
  const testNumber : RegExp = /[0-9]/;
  sessionStorage.setItem('userLoggedIN', '0');

  const sendRequest = async (url : string, method : any, headers : any, body : any) : Promise<any> => {
    return await fetch(url, {
      method: method,
      headers: headers,
      body : JSON.stringify(body)
    })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            const err : any = new Error('Something went wrong');
            err.data = error;
            return err;
          })
      })
  };

  const sendRequestGet = async (url : string, headers : any) : Promise<any> => {
    return await fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            const err : any = new Error('Something went wrong');
            err.data = error;
            return err;
          })
      })
  };

  const handleLoginEmailChange = (e : any) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e : any) => {
    setLoginPassword(e.target.value);
  };

  useEffect(() => {
    if(!validator.isEmail(loginEmail)) {
        setLoginEmailError('Oops, looks like email is incorrect.');
    } else {
      setLoginEmailError('');
    }

    if(loginPassword.length < 8 || !testLetters.test(loginPassword) || !testNumber.test(loginPassword) || loginPassword.length > 24) {
      setLoginPassError('Oops, looks like password is incorrect.')
    } else {
      setLoginPassError('');
    }

    if(!validator.isEmail(loginEmail) || loginPassword.length < 8 || !testLetters.test(loginPassword) || !testNumber.test(loginPassword) || loginPassword.length > 24) {
      setLoginBlocker(1);
    } else {
      setLoginBlocker(0);
    }

  }, [loginPassword, loginEmail, loginPassError, loginEmailError, testLetters, testNumber]);

  const Login = (e : any) => {
    e.preventDefault();

    let header = {'Content-Type': 'application/json'},
    body = {
        email: loginEmail,
        password: loginPassword,
    },
      getHeader = {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'};

    sendRequest('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', 'POST', header, body)
      .then(data => {
        console.log(data);
        sessionStorage.setItem('userLoggedIN', '1');
        setShowNumber(1);
        setLoginEmail('');
        setLoginPassword('');
        sendRequestGet('https://geekhub-frontend-js-9.herokuapp.com/api/users/all', getHeader)
          .then(data => {
            let dbUsers : Array<any> = data,
              checkEmailNumber : number = 0;

            localStorage.setItem('users', JSON.stringify(dbUsers));

            for(let i = 0; i < dbUsers.length; i++) {
              if (loginEmail === dbUsers[i].email) {
                checkEmailNumber = i;
                i = dbUsers.length - 1;
              }
            }
            if(sessionStorage.getItem('userLoggedIN') === '1') {
              setShowNumber(1);
              localStorage.setItem('lektorium_login_user_id', '');
              localStorage.setItem('lektorium_login_user_id', dbUsers[checkEmailNumber]._id)
            }
          })
      })
      .catch(err => {
        console.log(err);
        sessionStorage.setItem('userLoggedIN', '0');
        alert('Account was not found or password is incorrect!');
      });
  };

  return(
    <MainBlock>
      <Title>Sign in</Title>
      <Form>
        <FormInput type='email' name='loginEmail' placeholder='Email(example@gmail.com)...' value={loginEmail} onChange={handleLoginEmailChange} />
        <FormError>{loginEmailError}</FormError>
        <FormInput type='password' name='loginPassword' placeholder='Password(Testpass123)...' value={loginPassword} onChange={handleLoginPasswordChange} />
        <FormError>{loginPassError}</FormError>
        { loginBlocker === 1 ? <LoginBlocker></LoginBlocker> : null }
        <FormButton onClick={Login}>Sign In</FormButton>
        <FormLink>
          You can <span><Link to={'/register'}>Register</Link></span> or <span><Link to={'/resetPass'}>Reset Password</Link></span>
        </FormLink>
      </Form>
      { showNumber === 1 ? <GoToHomeLink><Link to={'/home'}>Home</Link></GoToHomeLink> : null }
    </MainBlock>
  );
};

export default LoginComponent;