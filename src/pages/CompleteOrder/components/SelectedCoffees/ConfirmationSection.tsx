import { Button } from "../../../../components/Button/idex";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formatedItemsTotal = formatMoney(cartItemsTotal);
  const formatedCartTotal = formatMoney(cartTotal);
  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText size="l" weight={700} color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight={700} color="subtitle">
          R$ {formatedCartTotal}
        </RegularText>
      </div>
      <Button text="Confirmar pedido" disabled={!cartQuantity} />
    </ConfirmationSectionContainer>
  );
}
