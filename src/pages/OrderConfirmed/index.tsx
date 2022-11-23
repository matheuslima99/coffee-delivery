import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import ConfirmedOrderIllustration from "./../../assets/confirmed-order.svg";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l">
          Agora é só aguardar que logo o café cheará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors["brand-purple"]}
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            iconBg={colors["brand-yellow"]}
            icon={<Timer weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            iconBg={colors["brand-yellow"]}
            icon={<Timer weight="fill" />}
            text={
              <RegularText>
                Pagamento na Entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={ConfirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  );
}
