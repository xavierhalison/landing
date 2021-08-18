import { Container, Illustration, BtnWrapper } from "./style";

import { H1 as Title, H4 as Subtitle } from "components/headings";

import { MainCTA, SubCTA } from "components/CTAs";

import illUstration1 from "assets/images/illustration1.svg";

function MainSection() {
  return (
    <Container id="inicio">
      <Title gradient>Halison - Landing Page em React</Title>
      <Illustration src={illUstration1} alt="" />
      <Subtitle>Escreva aqui alguma coisa de relevante para vender</Subtitle>
      <BtnWrapper>
        <MainCTA>Ação Principal</MainCTA>
        <SubCTA>Ação Secundária</SubCTA>
      </BtnWrapper>
    </Container>
  );
}

export default MainSection;
