import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: String;
}

export function Button({ text }: ButtonProps) {
  return <ButtonContainer>{text}</ButtonContainer>;
}
