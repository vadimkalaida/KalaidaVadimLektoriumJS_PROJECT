import styled from 'styled-components';

export const ErrorBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & p {
    color: #fff;
    font-weight: 800;
    font-size: 22px;
    & * {
      color: #BB5FDD;
      transition: .2s;
    }
    & *:hover {
      color: #993DBB;
    }
    & *:active {
      color: #BB5FDD;
    }
  }
`;