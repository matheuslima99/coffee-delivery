import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div``;

export const SectionBaseStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  margin-top: 0.938rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AdressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethotOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  & > span {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
    font-size: 0.875rem;
  }
`;
