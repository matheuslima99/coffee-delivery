import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />;
}
