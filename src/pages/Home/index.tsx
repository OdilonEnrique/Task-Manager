import { NavLink } from "react-router-dom";
import { StatsCard } from "../../components/StatsCard";
import { useQueryUser } from "../../hooks/useQueryUser";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryUser();

  return (
    <Container>
      <h2>Tarefas</h2>

      <div className="statsContainer">
        <NavLink to={"/tasks?filter=completed&page=1"}>
          <StatsCard
            title="Completadas"
            icon="task_alt"
            variant="completed"
            number={data?.tasksInfo.completed}
            total={data?.tasksInfo.total}
          />
        </NavLink>

        <NavLink to={"/tasks?filter=pending&page=1"}>
          <StatsCard
            title="Pendentes"
            icon="pending_actions"
            variant="pending"
            number={data?.tasksInfo.pending}
            total={data?.tasksInfo.total}
          />
        </NavLink>

        <NavLink to={"/tasks?filter=late&page=1"}>
          <StatsCard
            title="Atrasadas"
            icon="event_busy"
            variant="late"
            number={data?.tasksInfo.late}
            total={data?.tasksInfo.total}
          />
        </NavLink>

        <NavLink to={"/tasks?filter=all&page=1"}>
          <StatsCard
            title="Total"
            icon="query_stats"
            variant="neutral"
            number={data?.tasksInfo.total}
          />
        </NavLink>
      </div>
    </Container>
  );
}
