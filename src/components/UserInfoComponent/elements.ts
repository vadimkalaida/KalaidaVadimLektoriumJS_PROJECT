import styled from 'styled-components'

export const UserInfoParagraph = styled.p`
  font-size: 26px;
  margin-bottom: 45px;
  margin-top: 0;
  transition: .2s;
  background: #d9a7c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    color: #B2FEFA;
    transition: .2s;
    letter-spacing: 1.5px;
    font-size: 26px;
    text-transform: uppercase;
  }
  & *:hover {
    color: #126CD7;
  }
  & *:active {
    color: #B2FEFA;
  }
`;