import { MainCTA } from "components/CTAs";
import { H2 as Title } from "components/headings";

import { Container, Illustration2, FeatureList } from "./style";

import illUstration2 from "assets/images/illustration2.svg";

function Features() {
  return (
    <Container id="features">
      <Title gradient>These are some of my skills:</Title>
      <Illustration2 src={illUstration2} alt="" />
      <FeatureList>
        <li>ES6+ Javascript and React</li>
        <li>Building complex layouts with CSS3 and HTML5</li>
        <li>
          Modern frameworks such as Next.js and Libs such as Styled Components
        </li>
        <li>Typescript</li>
      </FeatureList>
      <MainCTA>My XP</MainCTA>
    </Container>
  );
}

export default Features;
