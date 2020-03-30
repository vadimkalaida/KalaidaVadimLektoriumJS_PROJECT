import styled from 'styled-components';

export const Form = styled.form`
  width: 800px;
  min-height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #0f0c29);
  background: linear-gradient(to right, #24243e, #0f0c29);
  margin-bottom: 50px;
`;

export const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  background: #11998e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FormInput = styled.input`
  width: 85%;
  height: 50px;
  padding-left: 15px;
  font-weight: 800;
  font-size: 18px;
  outline: none;
  margin-bottom: 20px;
  margin-top: 20px;
  &::placeholder {
    color: #6F22DE;
  }
`;

export const FormButton = styled.input`
  outline: none;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const FormLink = styled.button`
  width: 250px;
  min-height: 80px;
  background: #100D29;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  transition: .2s;
  margin-bottom: 15px;
  &:hover {
    background: #201D39;
  }
  &:active {
    background: #100D29;
  }
`;