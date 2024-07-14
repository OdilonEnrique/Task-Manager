import styled from "styled-components";

export const Container = styled.main`
  width: ${({ theme }) => theme.size.MAIN_WIDTH_MOBILE};

  h2 {
    font-size: 2rem;
  }

  .formContainer {
    height: 70vh;
    display: grid;
    place-content: start;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    width: ${({ theme }) => theme.size.MAIN_WIDTH_DESKTOP};
    display: grid;
    place-content: center;
    height: 75vh;
    grid-template-columns: 1fr;

    h2 {
      font-size: 2.4rem;
    }

    .formContainer {
      height: auto;
    }
  }
`;
