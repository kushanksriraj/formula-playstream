import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  VideoDataProvider,
  UserDataProvider
} from "./contexts";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <VideoDataProvider>
        <UserDataProvider>
          <Router>
          <App />
          </Router>
        </UserDataProvider>
      </VideoDataProvider>
  </StrictMode>,
  rootElement
);
