import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  select,
  option {
    font-size: 1.4rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.DARK200};
  }

  span {
    font-size: 1.4rem;
  }

  i {
    font-size: 1.2rem;
  }

  .paginationButtons {
    display: flex;
    gap: 1.2rem;
    margin-top: 0.2rem;
  }

  @media (min-width: 768px) {
    gap: 2.4rem;

    select,
    option {
      font-size: 1.6rem;
    }

    span {
      font-size: 1.6rem;
    }

    i {
      font-size: 1.4rem;
    }

    .paginationButtons {
      gap: 1.6rem;
    }
  }
`;
