import styled from 'styled-components'

export const MainHomeBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  & button {
    height: 50px;
    font-size: 20px;
    font-weight: 800;
    transition: .2s;
    cursor: pointer;
    outline: none;
    border: 1px solid #000;
  }
`;

export const HomeParagraph = styled.p`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.5px;
`;