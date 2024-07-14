import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  box-shadow: 0 0 4px 4px #0002;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menuIcon {
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 2.4rem;
    cursor: pointer;
  }

  .appLogo {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
      width: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    justify-content: end;

    .menuIcon {
      display: none;
    }

    .appLogo {
      h1 {
        font-size: 2rem;
      }

      img {
        width: 3.2rem;
      }
    }
  }
`;