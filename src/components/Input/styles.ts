import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  outline: 0;
  color: ${({ theme }) => theme.colors["base-text"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors["brand-purple"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
