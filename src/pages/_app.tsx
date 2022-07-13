import Header from "../components/Header";
import Player from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

import styled from "../styled/app.module.scss";
import "../styled/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styled.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player /> 
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
