import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  border-radius: 6px;
  border: none;
  outline: none;
  transition: 0.4s;
  color: ${({ theme }) => theme.colors["base-background"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
