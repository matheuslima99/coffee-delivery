import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroSubTitle,
  IntroTitle,
} from "./styles";
import IntroImg from "../../../../assets/intro-img.svg";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <IntroSubTitle size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroSubTitle>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBg={colors["brand-yellow-dark"]}
            />

            <InfoWithIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconBg={colors["base-text"]}
            />

            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconBg={colors["brand-yellow"]}
            />

            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconBg={colors["brand-purple"]}
            />
          </BenefitsContainer>
        </div>

        <img src={IntroImg} />
      </IntroContent>
    </IntroContainer>
  );
}
