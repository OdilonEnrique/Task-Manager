import { Container } from "./style";

type ButtonTypes = {
  title: string;
};

export function Button({ title }: ButtonTypes) {
  return <Container>{title}</Container>;
}
