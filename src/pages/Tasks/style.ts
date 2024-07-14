import styled from "styled-components";

export const Container = styled.main`
  margin-top: 1.2rem;

  .headPageTasks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(${({ theme }) => theme.size.MAIN_WIDTH_MOBILE} + 5vw);
    padding-left: 0.6rem;
  }

  h2 {
    font-size: 2rem;
  }

  .paginationDesktop {
    display: none;
  }

  .tasksContainer {
    height: 65vh;
    overflow-y: auto;
    margin-top: 1.6rem;
    display: grid;
    place-content: start;
    gap: 1rem;
    padding: 0.6rem;
  }

  .paginationMobile {
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) {
    .headPageTasks {
      width: calc(${({ theme }) => theme.size.MAIN_WIDTH_DESKTOP} + 5vw);
    }

    h2 {
      font-size: 2.8rem;
    }

    .paginationDesktop {
      display: block;
    }

    .tasksContainer {
      height: 60vh;
      gap: 1rem;
      padding-right: 0.8rem;
    }

    .paginationMobile {
      display: none;
    }
  }
`;
