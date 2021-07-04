import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { VideoDataProvider, UserDataProvider, AuthProvider } from "./contexts";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideoDataProvider>
      <UserDataProvider>
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </UserDataProvider>
    </VideoDataProvider>
  </StrictMode>,
  rootElement
);
