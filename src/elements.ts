import styled from 'styled-components';

export const AppBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  width: 700px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FormInput = styled.input`
  width: 85%;
  height: 35px;
  outline: none;
  font-size: 16px;
  color: #000;
  padding-left: 15px;
  margin-bottom: 15px;
  border: 1px solid #000;
  transition: .2s;
  &:focus {
    color: #0078D7;
    border: 1px solid #0078D7;
    font-weight: 800;
  }
`;

export const FormError = styled.p`
  color: #FF0800;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 15px;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 60px;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: 1px solid #000;
  margin-top: 25px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  transition: .2s;
  margin-bottom: 5px;
  &:hover {
    background: #0078D7;
    color: #fff;
    border: none;
  }
  &:active {
    background: transparent;
  }
`;

export const LoginBlocker = styled.div`
  width: 150px;
  height: 65px;
  position: absolute;
  bottom: 52px;
`;

export const RegisterBlocker = styled.div`
  width: 150px;
  height: 70px;
  position: absolute;
  bottom: 52px;
`;

export const FormLink = styled.p`
  font-size: 18px;
  & span {
    text-transform: uppercase;
    font-weight: 800;
    & * {
      color: #0078D7;
      transition: .2s;
      &:hover {
        color: #004EAD;
      }
    }
  }
`;

export const ErrorBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & * {
    font-size: 26px;
    font-weight: 800;
    transition: .2s;
    color: #0078D7;
    letter-spacing: 1.25px;
  }
  & *:hover {
    color: #004EAD;
  }
  & *:active {
    color: #0078D7;
  }
`;