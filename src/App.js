import "./styles.css";
import { Navbar, Menubar } from "./Components";
import {
  Home,
  History,
  Library,
  VideoPage,
  Login,
  PrivateRoute
} from "./Routes";
import { Routes, Route } from "react-router-dom";
import { Playlist } from "./Routes/Library/Playlist";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />

        <PrivateRoute path="/library" element={<Library />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/play-list/:playListId" element={<Playlist />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
