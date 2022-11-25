import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCartWrapper,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeDescription,
  CoffeeName,
  TagCoffee,
  TagCoffeeText,
  TagsCoffeeContainer,
} from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = formatMoney(coffee.price);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrease() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <TagsCoffeeContainer>
        {coffee.tags.map((tag) => (
          <TagCoffee key={`${coffee.id}${tag}`}>
            <TagCoffeeText>{tag}</TagCoffeeText>
          </TagCoffee>
        ))}
      </TagsCoffeeContainer>

      <CoffeeName size="s" color="subtitle" as="h3">
        {coffee.name}
      </CoffeeName>

      <CoffeeDescription size="s" color="label">
        {coffee.description}
      </CoffeeDescription>

      <CoffeeCardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
