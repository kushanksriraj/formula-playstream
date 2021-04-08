import "./styles.css";
import { Navbar, Menubar } from "./Components";
import { Home, History, Library, VideoPage } from "./Routes";
import { Routes, Route } from "react-router-dom";
import { Playlist } from "./Routes/Library/Playlist";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/history" element={<History />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/play-list/:playListId" element={<Playlist />} />
      </Routes>
    </div>
  );
}
