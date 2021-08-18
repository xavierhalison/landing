import {
  Container,
  SiteMap,
  SocialMediaLogos,
  MailForm,
  PersonalSection,
} from "./style";
import { H1 as Title, H5 } from "components/headings";
import { Linkedin, GitHub } from "react-feather";

import { Input } from "components/formField";
import { MainCTA } from "components/CTAs";

function Footer() {
  return (
    <Container>
      <PersonalSection>
        <Title gradient>Halison</Title>
        <SocialMediaLogos>
          <Linkedin className="social-media-icon" />
          <GitHub className="social-media-icon" />
        </SocialMediaLogos>
      </PersonalSection>
      <MailForm>
        <H5>Algum texto sobre email</H5>
        <Input placeholder="seu@email.com" />
        <MainCTA>Inscrever-se</MainCTA>
      </MailForm>
      <SiteMap>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </SiteMap>
    </Container>
  );
}

export default Footer;
