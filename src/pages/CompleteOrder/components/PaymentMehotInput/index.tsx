import { PaymentMethodInputContainer } from "./styles";
import { CreditCard } from "phosphor-react";

export function PaymentMethodInput() {
  return (
    <PaymentMethodInputContainer>
      <CreditCard  />
      Cartão de crédito
    </PaymentMethodInputContainer>
  );
}
