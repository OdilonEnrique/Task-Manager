import styled from "styled-components";
import { AppTheme } from "../../@types/styles";

export type ButtonStyleType = keyof AppTheme["colors"];

type ButtonContainerStyles = {
  variant: ButtonStyleType;
};

export const Container = styled.button<ButtonContainerStyles>`
  background: ${({ theme, variant }) => theme.colors[variant]}DD;
  box-shadow: 1px 1px 1px #0004;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.2rem;
  width: 100%;
  margin: 0 auto;
  transition: 100ms;

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
