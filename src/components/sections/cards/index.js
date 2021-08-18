import { Container } from "./style";

import { H2 as Title } from "components/headings";
import Card from "components/card";

function CardSection() {
  return (
    <Container id="cards">
      <Title gradient>Achei que faria sentido ter título aqui também</Title>
      <Card
        title="Teste de título"
        text="Algum texto que você vê escrito em cards de landing pages"
        colorScheme={1}
      />
      <Card
        title="Teste de título"
        text="Algum texto que você vê escrito em cards de landing pages"
        colorScheme={2}
      />
      <Card
        title="Teste de título"
        text="Algum texto que você vê escrito em cards de landing pages"
        colorScheme={3}
      />
    </Container>
  );
}

export default CardSection;
