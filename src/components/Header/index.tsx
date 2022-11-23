import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from "../../../src/assets/coffee-delivery-logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={22} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
