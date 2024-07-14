import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { SideBar } from "../SideBar";
import { useState } from "react";

export function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar((prevState) => (prevState == true ? false : true));
  }

  return (
    <Container>
      <i className="menuIcon material-icons" onClick={toggleSideBar}>
        menu
      </i>

      <div className="appLogo">
        <h1>Task Manager</h1>

        <Link
          to={"https://emanuelquintino.github.io/Page-WDC/"}
          target="_blank"
        >
          <img src={logo} alt="" />
        </Link>
      </div>

      {showSideBar && <SideBar toogleSideBar={toggleSideBar} />}
    </Container>
  );
}
