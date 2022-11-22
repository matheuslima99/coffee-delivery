import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors["base-button"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  ${({ size }) =>
    size === "medium" &&
    css`
      height: 2.375rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      height: 2rem;
    `}

  & input {
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  outline: none;
  background: transparent;
  line-height: 0;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
