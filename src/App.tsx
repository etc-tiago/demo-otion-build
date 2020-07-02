import React from "react";
import logo from "./logo.svg";
import { css } from "otion";

function App() {
  return (
    <div className={app}>
      <header className={appHeader}>
        <img src={logo} className={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const app = css({ textAlign: "center" });
const appLogo = css({ height: "40vmin", pointerEvents: "none" });
const appHeader = css({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});
const appLink = css({ color: "#61dafb" });

export default App;
