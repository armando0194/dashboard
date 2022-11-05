import { Swatches } from 'components';
import styled from "styled-components";
import { Text } from "styled-typography";

function MediaPlayer({songName, artist, album, year, url, colors}) {
  const primaryColor = colors[1] 
  const secondaryyColor = colors[1] 

  return (
    <Row>
      <Col> 
        <Album src={url} />
      </Col>
      <Col>
        <SongInfo>
          <Text level={3} color="white">Now Playing</Text>
          <Text level={1} color={primaryColor}>{songName}</Text>
          <Text level={4} color={secondaryyColor} >{artist}</Text>
          <Swatches colors={colors} />
        </SongInfo>
      </Col>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  z-index: 100;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const SongInfo = styled.div`
  padding: 50px;
  text-align: center;
`;

const Album = styled.img`
  height: 80%;
  aspect-ratio : 1 / 1;
`

export default MediaPlayer;
