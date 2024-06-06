import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.DARK700}88;
  position: fixed;
  z-index: 9999;
  height: 100%;
  top: 0;
  left: 0;
  width: 100vw;

  .asideMenu {
    box-shadow: 0 0 4px 4px #0002;
    background-color: ${({ theme }) => theme.colors.DARK700};
    padding: 0.8rem;
    height: 100%;
    width: 40vw;
    animation: openSideBar 300ms;

    > .closeIcon {
      color: ${({ theme }) => theme.colors.LIGHT400};
      font-size: 2.4rem;
      cursor: pointer;
      position: absolute;
      top: 2.4rem;
      left: 2.4rem;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-top: 7.2rem;
    }
  }

  .active {
    background: ${({ theme }) => theme.colors.PRIMARY700}88;
  }

  @keyframes openSideBar {
    from {
      opacity: 0;
      width: 0;
    }

    to {
      opacity: 1;
      width: 40vw;
    }
  }

  @media (min-width: 768px) {
    width: 20vw;

    .asideMenu {
      width: 20vw;
      animation: none;

      > .closeIcon {
        display: none;
      }
    }
  }
`;
