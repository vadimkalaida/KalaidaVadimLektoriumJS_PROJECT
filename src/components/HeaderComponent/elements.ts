import styled from 'styled-components';

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
    color: #26C0DC;
    outline: none;
    border: 2px solid #370669;
    background: transparent;
    & * {
      width: 100%;
      height: 50px;
      color: #26C0DC;
    }
  }
`;