import styled from 'styled-components'

export const GameMainBlock = styled.div`
  width: 800px;
  min-height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #434343;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #212121);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #434343, #212121); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-bottom: 50px;
  & span {
    font-weight: 800;
  }
`;

export const GameInfo = styled.p`
  max-width: 90%;
  font-size: 22px;
  background: #F7971E;
  background: -webkit-linear-gradient(to right, #FFD200, #F7971E);
  background: linear-gradient(to right, #FFD200, #F7971E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StartGame = styled.button`
  width: 120px;
  height: 65px;
  cursor: pointer;
  outline: none;
  background: #F7971E;
  background: -webkit-linear-gradient(to right, #FFD200, #F7971E);
  background: linear-gradient(to right, #FFD200, #F7971E);
  color: #434343;
  font-weight: 800;
  font-size: 24px;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 2px solid #F7971E;
  transition: .2s;
  &:hover {
    color: #F7971E;
    background: #434343;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #212121);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #212121); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &:active {
    color: #434343;
    background: #F7971E;
    background: -webkit-linear-gradient(to right, #FFD200, #F7971E);
    background: linear-gradient(to right, #FFD200, #F7971E);
  }
`;

export const GameArena = styled.div`
  width: 1000px;
  height: 700px;
  border: 1px solid #fff;
  position: relative;
  background: #434343;
  background: -webkit-linear-gradient(to right, #434343, #212121);
  background: linear-gradient(to right, #434343, #212121);
`;

export const GameCharacter = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
`;

export const GameGunImage = styled.img`
  width: 70px;
  height: 45px;
  position: absolute;
`;

export const GameTimerParagraph = styled.p`
  background: #F00000;
  background: -webkit-linear-gradient(to right, #DC281E, #F00000);
  background: linear-gradient(to right, #DC281E, #F00000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  font-weight: 800;
  & span {
    font-size: 32px;
    text-transform: uppercase;
  }
`;