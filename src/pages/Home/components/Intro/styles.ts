import styled from "styled-components";
import IntroBg from "../../../../assets/intro-background.svg";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${IntroBg})`};
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;