import styled from "styled-components";

function Background({children, background, url}) {
  return <>
    <ColoredBackground background={background} url={url}>
      {children}
    </ColoredBackground>
    <ImageBackground url={url}/>
    <Overlay />
  </>
}


const ColoredBackground = styled.div`
  background: ${props => props.background};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 0; 
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed; 
  display: block; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 0; 
  cursor: pointer; 
`;
const ImageBackground = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  position: fixed; 
  display: block; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0; 
  cursor: pointer; 
`;

export default Background;
