import { useState } from "react";

import { Container, DropdownGrid } from "./style";

import { H2 as Title } from "components/headings";
import DropdownCard from "components/dropdownCard";
import { MainCTA } from "components/CTAs";

function CardSection() {
  const [expandedCard, toggleCard] = useState([true, false, false]);

  function toggle(i) {
    const newCards = [].fill(0, 2, false);
    newCards[i] = !expandedCard[i];
    toggleCard(newCards);
  }

  return (
    <Container id="dropdowns">
      <Title gradient>Achei que faria sentido ter título aqui também</Title>
      <DropdownGrid>
        <DropdownCard
          title="Título do card"
          expanded={expandedCard[0]}
          toggle={() => toggle(0)}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </DropdownCard>
        <DropdownCard
          title="Título do card"
          expanded={expandedCard[1]}
          toggle={() => toggle(1)}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </DropdownCard>
        <DropdownCard
          title="Título do card"
          expanded={expandedCard[2]}
          toggle={() => toggle(2)}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </DropdownCard>
      </DropdownGrid>
      <MainCTA>Teste</MainCTA>
    </Container>
  );
}

export default CardSection;
