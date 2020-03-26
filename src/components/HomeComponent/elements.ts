import styled from 'styled-components'

export const MainHomeBlock = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HomeParagraph = styled.p`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-top: 0;
  background: #B2FEFA;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0ED2F7, #B2FEFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;