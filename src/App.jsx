import "./App.css";

import Navbar from "./components/navbar/navbar";
import Navitem from "./components/navbar/navitem";
import Dropdown from "./components/navbar/dropdown";
import { SiAboutdotme } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";

import Intro from "./pages/intro";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navitem icon={<SiAboutdotme />} />
        <Navitem icon={<FaBolt />}>
          <Dropdown />
        </Navitem>
        <Navitem icon={<BiMessageDetail />} />
      </Navbar>
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
