import "./App.css";
import Navbar from "./components/navbar/navbar";
import Navitem from "./components/navbar/navitem";
import { SiAboutdotme } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";
import Intro from "./pages/intro";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navitem icon={<SiAboutdotme />} />
        <Navitem icon={<FaBolt />} />
        <Navitem icon={<BiMessageDetail />} />
      </Navbar>
      <Intro />
    </div>
  );
}

export default App;
