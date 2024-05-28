import styled from "styled-components";

export const Container = styled.button`
  background: red;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.2rem;
  width: 100%;
  margin: 0 auto;
  box-shadow: 1px 1px 1px #0004;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: default;
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
