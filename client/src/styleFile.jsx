import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 65vw;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  border: solid;
  border-color: white;
  border-width: thin;
  border-radius: 5px;
 `;

export const ModalContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat (20, 5%);
  grid-template-rows: repeat(20, 5%);
 `;

export const HeaderStyle = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1;
  align-self: end;
  justify-self: center;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 14px;
  border-bottom: 2px solid #FF8F00;;
  z-index:50;
  font-weight: bold;

`;

export const HeaderLine = styled.div`
  grid-column: 1 / span 20;
  grid-row: 2;
  align-self: start;
  width: 100%;
  border-top: 2px solid #E7E7E7;
  margin: -2px;
  z-index: -50;
`;

export const ModalActiveImageStyle = styled.div`
  grid-column: 1 / span 15;
  grid-row: 3;
  justify-self: center;
  align-self: start;
  margin-right: 20px;
 `;

export const ModalProductNameStyle = styled.div`
  grid-column: 17 / span 3;
  grid-row: 3 / span 2;
  justify-self: left;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 17px;
 `;

export const ModalCarouselStyle = styled.div`
 grid-column: 17 / span 3;
 grid-row: 5 / span 2;
 justify-self: left;
 `;

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
`;
export const CarouselIMG = styled.img`
  width: 40px;
  height: 50px;
  border: solid;
  border-color: teal;
  border-width: thin;
  border-radius: 5px;
  margin-right: 10px
`;
CarouselIMG.displayName = 'img';

export const ModalIMG = styled.img`
  width: 40px;
  height: 50px;
  border: solid;
  border-color: lightgray;
  padding: 2px;
  margin: 5px;
`;
ModalIMG.displayName = 'img';

export const ActiveIMG = styled.img`
  width: 600px;
  height: 600px;
  cursor: pointer;
 `;
ActiveIMG.displayName = 'img';

export const ZoomModal = styled.div`
  margin-left: 10px;
  width: 90vw;
  height: 90vh;
  z-index: 1000;
  background-image: url(${(props) => props.src});
  background-size: 2000px 2000px;
  background-position: ${(props) => props.x}% ${(props) => props.y}%;
  background-repeat: no-repeat
`;
