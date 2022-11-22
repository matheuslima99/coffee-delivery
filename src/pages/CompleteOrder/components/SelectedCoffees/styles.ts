import styled from "styled-components";
import { SectionBaseStyle } from "../CompleteOrderForm/styles";

export const SelectedCoffeesContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
`;

export const ConfirmationSectionContainer = styled.section`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;
  }

  & > button:last-child {
    margin-top: 1.5rem;
  }
`;
