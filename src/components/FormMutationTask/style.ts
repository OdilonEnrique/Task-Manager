import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
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

  input,
  select {
    background: ${({ theme }) => theme.colors.DARK200};
    box-shadow: 1px 1px 1px #0004;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    padding: 1.2rem;
    width: 100%;
    margin: 0.4rem auto 0;
  }

  .dateTask {
    align-items: center;

    div:nth-child(1) {
      position: relative;
    }

    div:nth-child(2) {
      margin-top: 2.4rem;
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(0.9);
  }

  button {
    margin-top: 4.2rem;
  }

  @media (min-width: 560px) {
    label {
      font-size: 1.6rem;
    }

    input,
    select {
      font-size: 1.6rem;
    }

    .dateTask {
      display: flex;
      gap: 2.4rem;

      div:nth-child(2) {
        margin-top: 0;
      }

      div {
        flex: 1;
      }
    }
  }

  .isUpdateBoxButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }
`;
