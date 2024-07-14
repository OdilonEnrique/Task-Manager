import { MenuItem } from "../MenuItem";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type SideBarProps = {
  toggleSideBar?: () => void;
};

export function SideBar({ toggleSideBar }: SideBarProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      signOut();
      navigate("/");
    }
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      logoutApp();
    }
  }

  return (
    <Container onClick={toggleSideBar}>
      <div className="asideMenu" onClick={toggleSideBar}>
        <i className="material-icons closeIcon" onClick={toggleSideBar}>
          close
        </i>

        <nav>
          <ul>
            <NavLink to={"/"} onClick={toggleSideBar}>
              <MenuItem title="Home" icon="home" />
            </NavLink>

            <NavLink to={"/tasks?filter=all&page=1"} onClick={toggleSideBar}>
              <MenuItem title="Tarefas" icon="task" />
            </NavLink>

            <NavLink to={"/create-tasks"} onClick={toggleSideBar}>
              <MenuItem title="Adicionar" icon="add_circle" />
            </NavLink>

            <NavLink to={"/about"} onClick={toggleSideBar}>
              <MenuItem title="Sobre" icon="info" />
            </NavLink>

            <div onClick={logoutApp} onKeyUp={handleKeyUp} tabIndex={0}>
              <MenuItem title="Sair" icon="exit_to_app" />
            </div>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
