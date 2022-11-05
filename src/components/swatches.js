import styled from "styled-components";

const Swatches = ({colors}) => {
  const renderSwatches = (type, colors) => {
    return colors.map((color, id) => {
      return (
        <Swatch
          key={id++}
          background={Array.isArray(color) && type === "rgb"
                ? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                : color}
        />
      );
    });
  }
  
  return (
    <Container>
      {renderSwatches("rgb", colors)}
    </Container>);
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center
`;

const Swatch = styled.div`
  background-color: ${props => props.background};
  width: 30px;
  height: 30px;
`;

export default Swatches;