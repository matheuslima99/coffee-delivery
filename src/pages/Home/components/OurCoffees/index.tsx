import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle" as="h3">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  );
}
