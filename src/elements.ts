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
  &:hover {
    background: #F0F0F0;
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