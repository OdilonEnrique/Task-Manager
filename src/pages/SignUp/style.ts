import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  text-align: center;

  .signUpForm {
    margin-top: 4.2rem;

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

  .signUpLogo {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    img {
      width: 4.2rem;
      margin-top: 3.2rem;
      filter: drop-shadow(1px 1px 1px black);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .signUpForm {
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

    .signUpLogo {
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
        width: 36rem;
        filter: drop-shadow(2px 2px 2px black);
      }
    }
  }
`;
