import { Button } from "../../../../components/Button/idex";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText size="l" weight={700} color="subtitle">
          Entrega
        </RegularText>
        <RegularText size="l" weight={700} color="subtitle">
          R$ 33,20
        </RegularText>
      </div>
      <Button text="Confirmar pedido" />
    </ConfirmationSectionContainer>
  );
}
