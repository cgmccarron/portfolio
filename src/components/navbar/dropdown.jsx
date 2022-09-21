import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { AiFillGithub, AiOutlineCode } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { GiOfficeChair } from "react-icons/gi";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<AiFillGithub />}>My Github</DropdownItem>
          <DropdownItem
            rightIcon={<FiChevronRight />}
            leftIcon={<AiOutlineCode />}
            goToMenu="settings"
          >
            Odin Project
          </DropdownItem>
          <DropdownItem leftIcon={<GiOfficeChair />}>HotSeat</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<AiFillGithub />} goToMenu="main">
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<AiFillGithub />}>Calculator</DropdownItem>
          <DropdownItem leftIcon={<AiFillGithub />}>Etch-a-Sketch</DropdownItem>
          <DropdownItem leftIcon={<AiFillGithub />}>Signup Form</DropdownItem>
          <DropdownItem leftIcon={<AiFillGithub />}>Games</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
