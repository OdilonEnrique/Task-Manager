import { ChangeEvent } from "react";
import { Container } from "./styles";

type PaginationProps = {
  page: number;
  step?: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  changeLimit: (number: number) => void;
};

export function Pagination({
  page,
  step = 5,
  totalPages,
  changeLimit,
  nextPage,
  prevPage,
}: PaginationProps) {
  function handleChangeLimit(event: ChangeEvent<HTMLSelectElement>) {
    changeLimit(Number(event.target.value));
  }

  return (
    <Container>
      <div className="limitBox">
        <span>Quantidade por pagina:</span>
        <select defaultValue={step * 2} onChange={handleChangeLimit}>
          <option>{step * 1}</option>
          <option>{step * 2}</option>
          <option>{step * 3}</option>
          <option>{step * 4}</option>
        </select>
      </div>

      <div className="pageNumbers">
        <span>{totalPages ? page : "-"}</span>
        <span>/</span>
        <span>{totalPages || "-"}</span>
      </div>

      <div className="paginationButtons">
        <button onClick={prevPage}>
          <i className="material-icons">arrow_back_ios</i>
        </button>

        <button onClick={nextPage}>
          <i className="material-icons">arrow_forward_ios</i>
        </button>
      </div>
    </Container>
  );
}
