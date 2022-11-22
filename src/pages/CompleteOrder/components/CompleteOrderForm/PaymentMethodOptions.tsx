import { PaymentMethodInput } from "../PaymentMehotInput";
import { PaymentMethotOptionContainer } from "./styles";

export function PaymentMethotOption() {
  return (
    <PaymentMethotOptionContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethotOptionContainer>
  );
}
