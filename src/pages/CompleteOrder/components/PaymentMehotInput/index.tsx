import { ContentContainer, PaymentMethodInputContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => (
  <PaymentMethodInputContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentMethodInputContainer>
));
