import styled from 'styled-components'

export const UserInfoParagraph = styled.p`
  font-size: 26px;
  margin-bottom: 45px;
  margin-top: 0;
  transition: .2s;
  & span {
    font-weight: 800;
  }
  &:hover {
    color: #0078D7;
  }
`;

export const UserInfoLink = styled.p`
  & * {
    font-weight: 800;
    color: #0641A0;
    transition: .2s;
    letter-spacing: 1.5px;
    font-size: 26px;
    text-transform: uppercase;
  }
  & *:hover {
    color: #0078D7;
  }
  & *:active {
    color: #0641A0;
  }
`;