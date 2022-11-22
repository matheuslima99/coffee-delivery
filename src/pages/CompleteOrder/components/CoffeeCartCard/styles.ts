import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  & + & {
    margin-top: 1.5rem;
  }
`;

export const ActionsContainer = styled.div`
  width: 10.6875rem;
  height: 2rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  flex: 1;
  height: 100%;
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  transition: 0.4s;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  & svg {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
