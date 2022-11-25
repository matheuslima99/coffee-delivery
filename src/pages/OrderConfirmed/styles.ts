import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  max-width: 32.875rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac20 2.61%, #8047f8 98.76%);
  }

  strong {
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
