import styled from "styled-components";

export const Container = styled.main`
  h2 {
    font-size: 2.4rem;
  }

  .statsContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 1.6rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }

    .statsContainer {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;