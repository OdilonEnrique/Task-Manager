import { ChangeEvent } from "react";
import { Container } from "./style";

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
  prevPage,
  nextPage,
  changeLimit,
}: PaginationProps) {
  function handleChangeLimit(event: ChangeEvent<HTMLSelectElement>) {
    changeLimit(Number(event.target.value));
  }

  return (
    <Container>
      <div className="limitBox">
        <span>Quantidade por página: </span>

        <select onChange={handleChangeLimit} defaultValue={step * 2}>
          <option>{step * 1}</option>
          <option>{step * 2}</option>
          <option>{step * 3}</option>
          <option>{step * 4}</option>
        </select>
      </div>

      <div className="pageNumbers">
        <span>{totalPages ? page : "-"}</span>
        <span> / </span>
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
