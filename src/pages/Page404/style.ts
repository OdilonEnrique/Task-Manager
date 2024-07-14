import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.LIGHT400}44;
  }

  @media (min-width: 768px) {
    strong {
      font-size: 1.4rem;
    }
  }
`;
