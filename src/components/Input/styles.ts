import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  & > span {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  overflow: hidden;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors["brand-purple"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["base-error"]};
    `}
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const RightText = styled.span`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`;
