import { NowPlaying } from 'components';
import { ThemeProvider } from "styled-components";
import { GlobalTypeStyles } from "styled-typography";
import './App.css';

const typographyTheme = {
	fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
	bodyFontFamily: "GothamBold",
	headingFontFamily: "GothamBold"
};

function App() {
  return (
    <ThemeProvider theme={{ typography: typographyTheme }}>
      <GlobalTypeStyles />
      <NowPlaying />
    </ThemeProvider>
  );
}

export default App;
