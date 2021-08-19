import { Container, Illustration, BtnWrapper } from "./style";

import { H1 as Title, H4 as Subtitle } from "components/headings";

import { MainCTA, SubCTA } from "components/CTAs";

import { Divider1 } from "components/dividers";

import illUstration1 from "assets/images/illustration1.svg";

function MainSection() {
  return (
    <Container id="inicio">
      {/* <Divider1 /> */}
      <Title gradient>Halison Xavier</Title>
      <Illustration src={illUstration1} alt="" />
      <Subtitle>
        Frontend Software Engineer, Open Source Enthusiast, Web Crafter,
        Javascript Lover.
      </Subtitle>
      <BtnWrapper>
        <MainCTA>My Skills</MainCTA>
        <SubCTA>My XP</SubCTA>
      </BtnWrapper>
    </Container>
  );
}

export default MainSection;
