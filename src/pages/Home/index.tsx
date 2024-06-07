import { NavLink } from "react-router-dom";
import { useQueryUser } from "../../hooks/useQueryUser";
import { Container } from "./styles";
import { StatsCard } from "../../components/StatsCard";

export function Home() {
  const { data } = useQueryUser();
  console.log(data);

  return (
    <>
      <Container>
        <h2>Tarefas</h2>

        <div className="statsContainer">
          <NavLink to={"/tasks"}>
            <StatsCard
              title="Completadas"
              icon="task_alt"
              variant="completed"
              number={data?.tasksInfo.completed}
              total={data?.tasksInfo.total}
            />
          </NavLink>

          <NavLink to={"/tasks"}>
            <StatsCard
              title="Pendentes"
              icon="pending_actions"
              variant="pending"
              number={data?.tasksInfo.pending}
              total={data?.tasksInfo.total}
            />
          </NavLink>

          <NavLink to={"/tasks"}>
            <StatsCard
              title="Atrasadas"
              icon="event_busy"
              variant="late"
              number={data?.tasksInfo.late}
              total={data?.tasksInfo.total}
            />
          </NavLink>

          <NavLink to={"/tasks"}>
            <StatsCard
              title="Total"
              icon="query_stats"
              number={data?.tasksInfo.total}
            />
          </NavLink>
        </div>
      </Container>
    </>
  );
}
