import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  .signInPart1 {
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

  .signInPart2 {
    margin-top: 4.2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .signInPart1 {
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

    .signInPart2 {
      flex: 1;
    }
  }
`;