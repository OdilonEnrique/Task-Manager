import { Container } from "./style";
import logoRJ from "../../assets/logo-rj.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBar } from "../SideBar";

export function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar((prevState) => (prevState == true ? false : true));
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      toggleSideBar();
    }
  }

  return (
    <Container>
      <i
        className="material-icons menuIcon"
        onClick={toggleSideBar}
        onKeyUp={handleKeyUp}
        tabIndex={0}
      >
        menu
      </i>

      <div className="appLogo">
        <h1>Task Manager</h1>
        <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
          <img src={logoRJ} alt="logo rj rprograma jucás" />
        </Link>
      </div>

      {showSideBar && <SideBar toggleSideBar={toggleSideBar} />}
    </Container>
  );
}
