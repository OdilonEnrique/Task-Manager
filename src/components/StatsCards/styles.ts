import styled from "styled-components";

export type CardStyleType = "completed" | "pending" | "late" | "neutral";

type CardContainerStyles = {
  variant: CardStyleType;
};

const COLORS = {
  completed: "CHECK",
  pending: "COMPLEMENTARY",
  late: "DANGER400",
  neutral: "LIGHT200",
} as const;

export const Container = styled.div<CardContainerStyles>`
  background: ${({ theme, variant }) => theme.colors[COLORS[variant]]}BB;
  box-shadow: 1px 1px 1px #0004;
  border-radius: 0.8rem;
  font-weight: 700;
  padding: 2.4rem;
  width: 75vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 3.2rem;
    margin-top: 0.8rem;
  }

  i {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    padding: 4.2rem;
    width: 35vw;
    height: 28vh;

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 5.6rem;
    }

    i {
      font-size: 4.8rem;
    }
  }
`;