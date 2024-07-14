import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 32rem;
    margin: 0 auto;
    position: relative;

    section {
      margin-top: 2.4rem;
    }

    label {
      font-size: 1.4rem;
      text-align: left;
      display: block;
    }

    input {
      background: ${({ theme }) => theme.colors.DARK200};
      box-shadow: 1px 1px 1px #0004;
      border-radius: 0.8rem;
      font-size: 1.4rem;
      padding: 1.2rem;
      width: 100%;
      margin: 0.4rem auto 0;
    }

    button {
      margin-top: 4.2rem;
    }
  }

  @media (min-width: 768px) {
    form {
      width: 42rem;

      label {
        font-size: 1.6rem;
      }

      input {
        font-size: 1.6rem;
      }
    }
  }
`;
