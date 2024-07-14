import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1.8rem;

  &:hover {
    background: ${({ theme }) => theme.colors.PRIMARY700};
    cursor: pointer;
  }

  i {
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 1.8rem;
  }
`;
