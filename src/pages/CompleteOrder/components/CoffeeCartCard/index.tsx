import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1670198400&Signature=TlqZwy6awhzzSWGInHpaVPvGLtcUOGhPnpNjWQlGP3DBiMPKi8Cj1bV9GUxZgcT3qt6vDEBM1HFNQ-FX5QALGl5cm8wM-g5PO4bKjK9BapzdYGEjO6YEHq-Gl6A-cC2064vvn5mIFzflfaQrcfhhBiIHKcNUSfkFJwr43kYQOVNsu5GR17gM1JOzOye6PI0VwUJlDt9PVMMrICB2eieYRWlli0XeZLAMlbdpzvkMF2xbne4w1wEvNxYlddiznRU5aIUMqFp39oAi9AYR6F6VTtgpnCrYCky8Z3K~XBmtq8OSuQ157izYAIOf2xt3KsNUpRwZtAhgpflB7IarweLcUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <div>
          <RegularText color="subtitle">Expresso tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CoffeeCartCardContainer>
  );
}
