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
  background: #F7971E;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #FFD200, #F7971E);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #FFD200, #F7971E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: #541F20;
  padding-left: 15px;
  margin-bottom: 15px;
  border: 1px solid #000;
  transition: .2s;
  &:focus {
    color: #fff;
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
    background: linear-gradient(to right, #4A00E0, #8E2DE2);
    border: 2px solid #370669;
    font-weight: 800;
  }
`;

export const FormError = styled.p`
  color: #FF0800;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 15px;
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 60px;
  cursor: pointer;
  outline: none;
  color: #F9AC2D;
  background: transparent;
  border: 2px solid #F9AC2D;
  margin-top: 25px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  transition: .2s;
  margin-bottom: 5px;
  &:hover {
    background: #F7971E;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FFD200, #F7971E);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FFD200, #F7971E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    border: 2px solid #F7971E;
  }
  &:active {
    background: transparent;
  }
`;

export const LoginBlocker = styled.div`
  width: 150px;
  height: 70px;
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
  color: #FFF4D4;
  & span {
    text-transform: uppercase;
    font-weight: 800;
    & * {
      color: #B2FEFA;
      transition: .2s;
      &:hover {
        transition: .2s;
        color: #126CD7;
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

export const MainHomeBlock = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;