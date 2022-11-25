import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  position: sticky;
  top: 0;
  z-index: 999;

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
  cursor: inherit;

  & > span {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors["base-background"]};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme.colors[`brand-${variant}`]};
      }
    `}
`;
