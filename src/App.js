import "./styles.css";
import { Navbar, Menubar } from "./Components";
import {
  Home,
  History,
  Library,
  VideoPage,
  Login,
  Signup,
  PrivateRoute
} from "./Routes";
import { Routes, Route } from "react-router-dom";
import { Playlist } from "./Routes/Library/Playlist";
import { useState } from "react";

export default function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="App">
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <Menubar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />

        <PrivateRoute path="/library" element={<Library />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/play-list/:playListId" element={<Playlist />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
