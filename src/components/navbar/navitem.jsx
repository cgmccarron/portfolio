import { useState } from "react";

const Navitem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href={props.link}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default Navitem;
