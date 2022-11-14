import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from "../../../src/assets/coffee-delivery-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
