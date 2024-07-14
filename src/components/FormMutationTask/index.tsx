import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useTaskCreate } from "../../hooks/useTaskCreate";
import { useEffect, useState } from "react";
import { useTaskUpdate } from "../../hooks/useTaskUpdate";
import { TaskDataTypes } from "../TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { API } from "../../configs/api";

type Inputs = TaskDataTypes & { time: string };

type PropsToForm = {
  isUpdate?: boolean;
  toggleModal?: () => void;
  taskData?: TaskDataTypes;
};

export function FormMutationTask({
  isUpdate = false,
  toggleModal,
  taskData,
}: PropsToForm) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const mutateTaskCreate = useTaskCreate();
  const mutateTaskUpdate = useTaskUpdate();
  const navigate = useNavigate();

  const { refetch } = useQueryTasks();

  async function handleDeleteTask(id?: string) {
    if (id && toggleModal) {
      const resp = confirm("Deseja remover tarefa?");

      if (resp) {
        setIsLoading(true);
        await API.delete(`task/${taskData?.id}`)
          .then(() => {
            alert("Tarefa deletada com sucesso!");
            toggleModal();
            refetch();
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao tentar deletar tarefa!");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }

  function updateDate3HoursAgo(date: Date) {
    return new Date(new Date(date).getTime() - 1000 * 60 * 60 * 3);
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, description, date, time, status } = data;

    const dateAndTime = new Date(new Date(date + " " + time)).toISOString();

    if (isUpdate) {
      mutateTaskUpdate.mutate({
        id: taskData?.id,
        title,
        description,
        date: dateAndTime,
        status,
      });
    } else {
      mutateTaskCreate.mutate({
        title,
        description,
        date: dateAndTime,
        status,
      });
    }
  };

  useEffect(() => {
    if (mutateTaskCreate.isSuccess) {
      navigate("/tasks?filter=all&page=1");
      reset();
    }
  }, [mutateTaskCreate.isSuccess, navigate, reset]);

  useEffect(() => {
    if (toggleModal && mutateTaskUpdate.isSuccess) {
      refetch();
      toggleModal();
      reset();
    }
  }, [mutateTaskUpdate.isSuccess, refetch, toggleModal, reset]);

  useEffect(() => {
    if (isUpdate && taskData) {
      reset({
        title: taskData.title || "",
        description: taskData.description || "",
        date: taskData.date
          ? new Date(taskData.date).toISOString().split("T")[0]
          : "",
        time: taskData.date
          ? updateDate3HoursAgo(new Date(taskData.date))
              .toISOString()
              .split("T")[1]
              .slice(0, 5)
          : "",
        status: taskData.status || "pending",
      });
    }
  }, [isUpdate, taskData, reset]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <section>
        <label>
          Título:
          <input
            type="text"
            placeholder="digite o título da tarefa"
            autoFocus={!isUpdate}
            {...register("title", {
              required: "Campo obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            })}
          />
        </label>
        <span className="inputError">{errors.title?.message}</span>
      </section>

      <section>
        <label>
          Descrição:
          <input
            type="text"
            placeholder="descreva a tarefa a ser realizada"
            {...register("description", {
              required: "Campo obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            })}
          />
        </label>
        <span className="inputError">{errors.description?.message}</span>
      </section>

      <section className="dateTask">
        <div>
          <label>
            Data:
            <input
              type="date"
              placeholder="Escolha o dia que será realizada"
              min={
                isUpdate
                  ? undefined
                  : updateDate3HoursAgo(new Date()).toISOString().split("T")[0]
              }
              {...register("date", {
                required: "Campo obrigatório",
              })}
            />
          </label>
          <span className="inputError">{errors.date?.message}</span>
        </div>

        <div>
          <label>
            Hora:
            <input
              type="time"
              placeholder="Escolha a hora da realização da tarefa"
              {...register("time", {
                required: "Campo obrigatório",
              })}
            />
          </label>
          <span className="inputError">{errors.time?.message}</span>
        </div>
      </section>

      {isUpdate && (
        <section>
          <label>
            Status:
            <select
              {...register("status", {
                required: "Campo obrigatório",
              })}
            >
              <option value="pending">Pendente</option>
              <option value="completed">Concluída</option>
            </select>
          </label>
          <span className="inputError">{errors.status?.message}</span>
        </section>
      )}

      {isUpdate ? (
        <div className="isUpdateBoxButton">
          <Button
            title={"Atualizar"}
            loading={mutateTaskUpdate.isPending}
            variant={"update"}
            type="submit"
          />
          <Button
            title={"Remover"}
            loading={isLoading}
            variant={"delete"}
            type="button"
            onClick={() => handleDeleteTask(taskData?.id)}
          />
        </div>
      ) : (
        <Button
          title={"Adicionar"}
          loading={mutateTaskCreate.isPending}
          variant={"create"}
          type="submit"
        />
      )}
    </Container>
  );
}
