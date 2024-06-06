import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { MenuItem } from "../MenuItem";
import { useAuth } from "../../hooks/useAuth";

type SideBarTypes = {
  toggleSideBar?: () => void;
};

export function SideBar({ toggleSideBar }: SideBarTypes) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");

    if (resp) {
      signOut();
      navigate("/");
    }
  }
  return (
    <>
      <Container onClick={toggleSideBar}>
        <div className="asideMenu" onClick={toggleSideBar}>
          <i className="closeIcon material-icons" onClick={toggleSideBar}>
            close
          </i>

          <nav>
            <ul>
              <NavLink to={"/"} onClick={toggleSideBar}>
                <MenuItem title="Home" icon="home" />
              </NavLink>

              <NavLink to={"/tasks"} onClick={toggleSideBar}>
                <MenuItem title="Tarefa" icon="task" />
              </NavLink>

              <NavLink to={"/create-tasks"} onClick={toggleSideBar}>
                <MenuItem title="Adicionar" icon="add_circle" />
              </NavLink>

              <NavLink to={"/about"} onClick={toggleSideBar}>
                <MenuItem title="Sobre" icon="info" />
              </NavLink>

              <div onClick={logoutApp}>
                <MenuItem title="Sair" icon="exit_to_app" />
              </div>
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
}
