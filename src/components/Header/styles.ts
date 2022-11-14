import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  padding: 8px;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  border: none;
  position: relative;

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme.colors[`brand-${variant}`]};
      }
    `}
`;
