import { IntroContainer, IntroContent } from "./styles";
import IntroImg from "../../../../assets/intro-img.svg";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            
          </section>
        </div>

        <img src={IntroImg} />
      </IntroContent>
    </IntroContainer>
  );
}
