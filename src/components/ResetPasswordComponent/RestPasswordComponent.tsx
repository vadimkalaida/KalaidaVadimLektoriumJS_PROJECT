import React, { useState, useEffect } from 'react';
import { MainBlock, Title, Form, FormInput, FormError, FormButton, RegisterBlocker, FormLink } from "../../elements";
import validator from "validator";
import { Link } from "react-router-dom";

const ResetPasswordComponent = () => {
  const [ resetEmail, setResetEmail ] : React.ComponentState = useState('');
  const [ resetPassword, setResetPassword ] : React.ComponentState = useState('');
  const [ resetConfirmPassword, setResetConfirmPassword ] : React.ComponentState = useState('');
  const [ resetEmailError, setResetEmailError ] : React.ComponentState = useState('');
  const [ resetPasswordError, setResetPasswordError ] : React.ComponentState = useState('');
  const [ resetConfirmPasswordError, setResetConfirmPasswordError ] : React.ComponentState = useState('');
  const [ resetBlocker, setResetBlocker ] : React.ComponentState = useState(1);
  const testLetters : RegExp = /[a-zA-Z]/;
  const testNumber : RegExp = /[0-9]/;

  const sendRequestReset = async (url : string, myPass : string, myConfirmPass : string, myEmail : string) : Promise<any> => {
    return await fetch (url, {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
      },
      body : JSON.stringify({
        password: myPass,
        confirmationPassword: myConfirmPass,
        email: myEmail
      }),
    })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json().then(error => {
          const err : any = new Error('Something went wrong');
          err.data = error;
          throw err;
        })
      });
  };

  const handleResetEmailChange = (e : any) => {
    setResetEmail(e.target.value);
  };

  const handleResetPasswordChange = (e : any) => {
    setResetPassword(e.target.value);
  };

  const handleResetConfirmPasswordChange = (e : any) => {
    setResetConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if(!validator.isEmail(resetEmail)) {
      setResetEmailError('Oops, looks like email is incorrect.');
    } else {
      setResetEmailError('');
    }

    if(resetPassword.length < 8 || !testLetters.test(resetPassword) || !testNumber.test(resetPassword) || resetPassword.length > 24) {
      setResetPasswordError('Oops, looks like password is incorrect.');
    } else {
      setResetPasswordError('');
    }

    if(resetConfirmPassword !== resetPassword) {
      setResetConfirmPasswordError('Oops, looks like password and confirm password are different.');
    } else {
      setResetConfirmPasswordError('');
    }

    if(!validator.isEmail(resetEmail) || resetPassword.length < 8 || !testLetters.test(resetPassword) || !testNumber.test(resetPassword) || resetPassword.length > 24 || resetConfirmPassword !== resetPassword) {
      setResetBlocker(1);
    } else {
      setResetBlocker(0);
    }
  }, [resetPassword, resetConfirmPassword, resetEmail, testNumber, testLetters]);

  const reset = (e : any) => {
    e.preventDefault();

    sendRequestReset('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password', resetPassword, resetConfirmPassword, resetEmail)
      .then(data => {
        console.log(data);
        alert('Password was changed!');
        document.location.reload();
      })
      .catch(err => {
        console.log(err);
        alert('Account was not found!');
        document.location.reload();
      })
  };

  return(
    <MainBlock>
      <Title>Reset Password</Title>
      <Form>
        <FormInput type='email' name='resetEmail' value={resetEmail} onChange={handleResetEmailChange} placeholder='Email(example@gmail.com)...' />
        <FormError>{resetEmailError}</FormError>
        <FormInput type='password' name='resetPassword' value={resetPassword} onChange={handleResetPasswordChange} placeholder='New Password(Testpass123)...' />
        <FormError>{resetPasswordError}</FormError>
        <FormInput type='password' name='resetConfirmPassword' value={resetConfirmPassword} onChange={handleResetConfirmPasswordChange} placeholder='Confirm Password...' />
        <FormError>{resetConfirmPasswordError}</FormError>
        { resetBlocker === 1 ? <RegisterBlocker></RegisterBlocker> : null }
        <FormButton onClick={reset}>Reset</FormButton>
        <FormLink>
          You can <span><Link to={'/'}>Login</Link></span> or <span><Link to={'/register'}>Register</Link></span>
        </FormLink>
      </Form>
    </MainBlock>
  );
};

export default ResetPasswordComponent;