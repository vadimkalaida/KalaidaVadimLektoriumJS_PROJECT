import React, { useState, useEffect } from 'react';
import { MainBlock, Title, Form, FormInput, FormError, FormButton, RegisterBlocker, FormLink } from "../../elements";
import validator from "validator";
import { Link } from "react-router-dom";
import { sendRequestRegister } from "../../services/registerRequests";

const RegisterComponent = () => {
  const [ registerName, setRegisterName ] : React.ComponentState = useState('');
  const [ registerEmail, setRegisterEmail ] : React.ComponentState = useState('');
  const [ registerPassword, setRegisterPassword ] : React.ComponentState = useState('');
  const [ registerBlocker, setRegisterBlocker ] : React.ComponentState = useState(1);
  const [ registerNameError, setRegisterNameError ] : React.ComponentState = useState('');
  const [ registerEmailError, setRegisterEmailError ] : React.ComponentState = useState('');
  const [ registerPasswordError, setRegisterPasswordError ] : React.ComponentState = useState('');

  const userPosts : Array<string> = ['UX/UI Designer', 'Java Developer', 'Mobile Developer', 'Graphics Developer', 'Data Scientist', 'Security Developer', 'High-Level Developer',
    'Low-Level Developer', 'Big Data Developer', 'DevOps Developer', 'CRM Developer',  'Desktop Developer', 'Wordpress Developer', 'App Developer', 'Game Developer',
    'JavaScript Developer', 'Ruby Developer', 'QA', 'Backend Developer', 'Frontend Developer', 'Full-stack Developer', 'Manager', 'Investor Platinum', 'Investor Gold',
    'Investor Silver', 'GeekHub Student'];
  const userAddresses : Array<string> = ["17 Poplar Dr. Modesto, CA 95350", "855 Peg Shop Ave. Salinas, CA 93906", "143 Ann Dr. Los Angeles, CA 90066",
    "25 Rockville St. San Jose, CA 95123", "992 County Road Chula Vista, CA 91911", "5 Marshall Lane Flushing, NY 11354", "7 Linden St. Rego Park, NY 11374",
    "7042 Shore St. Brooklyn, NY 11203", "7938 Chapel Street Orlando, FL 32812", "74 Mayflower Drive Panama City, FL 32404"];
  const userCompanies : Array<string> = ['Lektorium', 'Microsoft', 'SONY', 'Google', 'Apple', 'Samsung Electronics', 'Amazon', 'Facebook', 'Tweeter', 'Intel', 'IBM', 'AMD',
    'Nvidia', 'Nintendo', 'Oracle', 'Orange', 'PayPal', 'Netflix', 'Adobe', 'Ebay', 'Naughty Dog', 'Santa Monica Studio', 'Sony Band Studio', 'Insomniac Games', 'Rockstar Games', 'Remedy Entertainment',
    'CD PROJECT RED', 'Activision Blizzard', 'Ubisoft', 'Guerilla Games', 'Kojuma Productions', 'Sucker Punch Productions', 'Ready At Dawn', 'Supermassive Games', 'Quantic Dream', 'Capcom',
    'Crystal Dynamics', 'HP Enterprise', 'Alphabet', 'Yahoo', 'LinkedIn', 'Xiaomi', 'Umbrella Corporation'];
  const testLetters : RegExp = /[a-zA-Z]/;
  const testNumber : RegExp = /[0-9]/;
  const testName : RegExp = /^[A-Za-z][A-Za-z0-9]*$/;

  const handleNameRegisterChange = (e : any) => {
    setRegisterName(e.target.value);
  };

  const handleEmailRegisterChange = (e : any) => {
    setRegisterEmail(e.target.value);
  };

  const handlePasswordRegisterChange = (e : any) => {
    setRegisterPassword(e.target.value);
  };

  useEffect(() => {
    if(!testName.test(registerName) || registerName.length < 8 || registerName.length > 36) {
      setRegisterNameError('Oops, looks like name is incorrect.');
    } else {
      setRegisterNameError('');
    }

    if(!validator.isEmail(registerEmail)) {
      setRegisterEmailError('Oops, looks like email is incorrect.');
    } else {
      setRegisterEmailError('');
    }

    if(registerPassword.length < 8 || !testLetters.test(registerPassword) || !testNumber.test(registerPassword) || registerPassword.length > 24) {
      setRegisterPasswordError('Oops, looks like password is incorrect.');
    } else {
      setRegisterPasswordError('');
    }

    if(!testName.test(registerName) || registerName.length < 8 || registerName.length > 36 || !validator.isEmail(registerEmail) || registerPassword.length < 8 || !testLetters.test(registerPassword) || !testNumber.test(registerPassword) || registerPassword.length > 24) {
      setRegisterBlocker(1);
    } else {
      setRegisterBlocker(0);
    }

  }, [testName, testNumber, testLetters, registerName, registerPassword, registerEmail]);

  const signUp = ( e : any ) => {
    e.preventDefault();

    let registerPhone : string = '+48 ',
      registerJob : string = userPosts[Math.floor(Math.random() * userPosts.length)],
      registerAddress : string = userAddresses[Math.floor(Math.random() * userAddresses.length)],
      registerCompany : string = userCompanies[Math.floor(Math.random() * userCompanies.length)];

    for(let i = 0; i < 9; i++) {
      registerPhone += Math.floor((Math.random() * 9));
    }

    sendRequestRegister('https://geekhub-frontend-js-9.herokuapp.com/api/users/', registerJob, registerPhone, registerAddress, registerCompany, registerName, registerEmail, registerPassword)
      .then((data) => {
        alert('You\'ve successfully registered!');
        console.log(data);
        document.location.reload();
      })
      .catch(error => {
        console.log(error);
        alert('Account already exist');
        document.location.reload();
      })

  };

  return(
    <MainBlock>
      <Title>Sign up</Title>
      <Form>
        <FormInput type='text' name='registerName' placeholder='Name(JohnCarmack)...' value={registerName} onChange={handleNameRegisterChange} />
        <FormError>{registerNameError}</FormError>
        <FormInput type='email' name='registerEmail' placeholder='Email(example@gmail.com)...' value={registerEmail} onChange={handleEmailRegisterChange} />
        <FormError>{registerEmailError}</FormError>
        <FormInput type='password' name='registerPassword' placeholder='Password(Testpass123)...' value={registerPassword} onChange={handlePasswordRegisterChange} />
        <FormError>{registerPasswordError}</FormError>
        { registerBlocker === 1 ? <RegisterBlocker></RegisterBlocker> : null }
        <FormButton onClick={signUp}>Sign up</FormButton>
        <FormLink>
          You can <span><Link to={'/'}>Login</Link></span> or <span><Link to={'/resetPass'}>Reset Password</Link></span>
        </FormLink>
      </Form>
    </MainBlock>
  );
};

export default RegisterComponent;