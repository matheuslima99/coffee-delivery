import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  background: ${({ theme }) => theme.colors["base-card"]};

  & > img {
    width: 7rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const TagsCoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const TagCoffee = styled.div`
  height: 21px;
  min-width: 5.0625rem;
  padding: 0.25 0.5rem;
  border-radius: 6.25rem;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors["brand-yellow-light"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagCoffeeText = styled.strong`
  font-size: 0.625rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
`;

export const CoffeeName = styled(TitleText)`
  margin-top: 1rem;
`;

export const CoffeeDescription = styled(RegularText)`
  margin-top: 0.5rem;
`;

export const CoffeeCardFooter = styled.footer`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    > p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;
