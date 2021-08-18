import { MainCTA } from "components/CTAs";
import { H2 as Title } from "components/headings";

import { Container, Illustration2, FeatureList } from "./style";

import illUstration2 from "assets/images/illustration2.svg";

function Features() {
  return (
    <Container id="features">
      <Title gradient>
        Esse vai ser o título da terceira seção e será grande
      </Title>
      <Illustration2 src={illUstration2} alt="" />
      <FeatureList>
        <li>Alguma feature</li>
        <li>Mais uma feature</li>
        <li>
          Essa feature vai ter um textão enorme pra gente ver como se comporta
        </li>
        <li>teste</li>
      </FeatureList>
      <MainCTA>Ação Principal</MainCTA>
    </Container>
  );
}

export default Features;
