import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1.8rem;
  transition: 0ms;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.PRIMARY700}44;
  }

  i {
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 1.8rem;
  }
`;
