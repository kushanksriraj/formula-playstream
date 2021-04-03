import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ControlProvider,
  VideoDataProvider,
  UserDataProvider
} from "./contexts";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ControlProvider>
      <VideoDataProvider>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </VideoDataProvider>
    </ControlProvider>
  </StrictMode>,
  rootElement
);
