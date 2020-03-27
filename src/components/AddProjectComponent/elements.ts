import styled from 'styled-components';

export const AddProjectForm = styled.form`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #41295a;
  background: -webkit-linear-gradient(to left, #2F0743, #41295a);
  background: linear-gradient(to left, #2F0743, #41295a);
  border-radius: 15px;
  position: relative;
`;

export const AddProjectTitle = styled.p`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.5px;
  background: #ff9966;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AddProjectInput = styled.input`
  width: 85%;
  height: 50px;
  outline: none;
  font-size: 18px;
  font-weight: 800;
  padding-left: 15px;
  border: none;
  background: #ff9966;
  background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
  background: linear-gradient(to left, #ff5e62, #ff9966);
  transition: .2s;
  margin-bottom: 15px;
  &::placeholder {
    color: #300B44;
  }
  &:focus {
    background: #ff9966;
    background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
    background: linear-gradient(to left, #ff5e62, #ff9966);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid #ff5e62;
  }
`;

export const AddProjectButton = styled.button`
  width: 125px;
  height: 50px;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  letter-spacing: 1.3px;
  transition: .2s;
  color: #300B44;
  border: none;
  background: #ff9966;
  background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
  background: linear-gradient(to left, #ff5e62, #ff9966);
  position: absolute;
  bottom: 45px;
  &:hover {
    border: 2px solid #ff5e62;
    background: #ff9966;
    background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
    background: linear-gradient(to left, #ff5e62, #ff9966);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const AddProjectBlocker = styled.div`
  width: 130px;
  height: 85px;
  position: absolute;
  background: transparent;
  bottom: 35px;
  z-index: 999999;
`;

