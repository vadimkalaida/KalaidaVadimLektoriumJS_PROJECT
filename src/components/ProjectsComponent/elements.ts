import styled from 'styled-components';

export const ProjectsBlock = styled.div`
  width: 700px;
  max-height: 700px;
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  border: 2px solid #AC4500;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-y: auto;
`;

export const ProjectsTitle = styled.p`
  color: #882100;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 26px;
`;

export const Project = styled.div`
  width: 90%;
  min-height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProjectParagraph = styled.p`
  color: #B0001D;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  & span {
    font-weight: 800;
    letter-spacing: 1.3px;
  }
`;

export const DeleteProjectParagraph = styled.p`
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  font-weight: 800;
  transition: .2s;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: #BA0001;
  }
  &:active {
    color: #FF3846;
  }
`;