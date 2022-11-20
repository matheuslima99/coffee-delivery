import styled from "styled-components";
import IntroBg from "../../../../assets/intro-background.svg";
import { RegularText, TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${IntroBg})`};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const IntroSubTitle = styled(RegularText)``;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
