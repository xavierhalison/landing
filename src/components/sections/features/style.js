import styled from "styled-components";
import { H2 as Title } from "components/headings";
import { MainCTA } from "components/CTAs";

const Container = styled.div`
  height: 100vh;
  padding: var(--padding-sm);
  display: grid;
  justify-items: center;
  align-content: center;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    align-items: center;
    padding: 0 var(--padding-lg);
  }

  ${MainCTA} {
    @media screen and (min-width: 1025px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-self: baseline;
      justify-self: baseline;
    }
  }

  ${Title} {
    text-align: center;
    font-family: "Montserrat";

    @media screen and (min-width: 1025px) {
      text-align: left;
      grid-column: 1 / 2;
      font-size: 36px;
      align-self: end;
      margin-bottom: 40px;
    }
  }
`;

const Illustration2 = styled.img`
  width: 100%;
  margin: 30px 0;

  @media screen and (min-width: 1025px) {
    width: 500px;
    align-self: center;
    grid-row: 1/2;
    grid-column: 2/3;
    margin-top: 40px;
  }
`;

const FeatureList = styled.ul`
  padding: var(--padding-sm);
  margin: 10px 0;
  color: var(--main-text);

  @media screen and (min-width: 1025px) {
    grid-column: 2 / 3;
    justify-self: baseline;
    align-self: baseline;
  }

  li {
    margin: 10px 0;
  }
`;

export { Container, FeatureList, Illustration2 };
