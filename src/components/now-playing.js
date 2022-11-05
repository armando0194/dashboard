import { Background, MediaPlayer } from "components";
import { useEffect, useState } from 'react';
import { ColorExtractor } from "react-color-extractor";
import styled from "styled-components";
import SpotifyService from "utils/api-service";

const NowPlaying = () => {
  
  const songs = [
    {
      songName: "I Don't Really Mind",
      artist: "Tame Impala",
      album: "Innerspeaker",
      year: 1994,
      url: "/img/tame-impala-inner.jpg"
    },
    {
      songName: "You Can't Only Love When You Want To",
      artist: "Strange Boys",
      album: "Be Brave",
      year: 1994,
      url: "/img/stange-boys-breave.jpg"
    },
    
  ]

  const [currIdx, setCurrIdx] = useState(0)
  const [song, setSong] = useState(songs[0]);
  const [colors, setColors] = useState([]);
  const spotify = new SpotifyService('BQByKeNa_WaQK-v1ynocOKUOYB1vlb-7o7iiP-sgh2fRywEuRgyT9MoO65A4fQ_h7uzD1iqfHaBH_Mt_t3MDXcl4RrHFYSXOrfWA-wqplf5L0EZST8TcM4HAa73OrvfVRbXQiZ6NfIcsTsCbO6Pfn8rUttOh3k3Z9zKUERRBo-bz0YNOsuZGSeWYhBU')

  useEffect(() => {
    spotify.getCurrentlyPlaying((status, res) => {
      console.log(res);
      setSong({
        songName: res.item.name,
        artist: res.item.artists[0].name,
        album: res.item.album.name,
        year: 1994,
        url: res.item.album.images[0].url
      })})
  }, []);
  
  function getColors(newColors) {
    setColors(newColors)
  }
  
  function prev(){
    let newIdx = (currIdx - 1 < 0) ? songs.length - 1 : currIdx - 1;
    setCurrIdx(newIdx)
    setSong(songs[newIdx])
  }

  function next(){
    let newIdx = (currIdx + 1) % songs.length;
    setCurrIdx(newIdx)
    setSong(songs[newIdx])
  }

  return (
    <>
      <ColorExtractor
        src={song.url}
        getColors={getColors}
      />
      <Background background={colors[5]} url={song.url}>
         <MediaPlayer 
            songName={song.songName} 
            artist={song.artist} 
            album={song.album} 
            year={song.year} 
            url={song.url}
            colors={colors} />
      </Background>
      <Switcher> 
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </Switcher>
    </>);
};

const Switcher = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export default NowPlaying;