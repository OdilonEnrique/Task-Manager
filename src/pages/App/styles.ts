import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .sideBar {
    display: none;
  }

  article {
    background: ${({ theme }) => theme.colors.DARK700}44;
    display: grid;
    place-content: center;
    position: relative;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: 20vw 1fr;
    grid-template-rows: 8rem 1fr 6rem;

    grid-template-areas:
      "aside header"
      "aside main"
      "aside footer";

    header {
      grid-area: header;
    }

    article {
      grid-area: main;
    }

    aside {
      grid-area: aside;
    }

    footer {
      grid-area: footer;
    }

    .sideBar {
      display: block;
    }
  }
`;
