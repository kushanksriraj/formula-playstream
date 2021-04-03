import "./styles.css";
import { Navbar, Menubar, MainSection } from "./Components";
import { Home, Library } from "./Routes";
import { useControl } from "./hooks";

export default function App() {
  const { route } = useControl();
  return (
    <div className="App">
      <Navbar />
      <Menubar />
      {route === "home" && <Home />}
      {route === "library" && <Library />}
    </div>
  );
}
