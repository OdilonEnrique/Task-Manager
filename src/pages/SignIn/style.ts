import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  .signInLogo {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    img {
      width: 24rem;
      filter: drop-shadow(1px 1px 1px black);
    }
  }

  .signInForm {
    margin-top: 4.2rem;
    text-align: center;

    h2 {
      font-size: 1.8rem;
    }

    .messageChangePage {
      margin-top: 4.2rem;

      span {
        font-size: 1.4rem;
      }

      button {
        font-size: 1.4rem;
        font-weight: 700;
        text-decoration: underline;

        &:disabled {
          cursor: default;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .signInLogo {
      flex: 1;
      text-align: center;

      div {
        text-align: left;
        width: 42rem;
        margin: 0 auto;
      }

      h1 {
        font-size: 3.2rem;
      }

      img {
        width: 44rem;
        filter: drop-shadow(2px 2px 2px black);
      }
    }

    .signInForm {
      flex: 1;

      h2 {
        font-size: 2.4rem;
      }

      .messageChangePage {
        span {
          font-size: 1.6rem;
        }

        button {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
