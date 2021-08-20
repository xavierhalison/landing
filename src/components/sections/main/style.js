import styled from "styled-components";
import { H1 as Title, H4 as Subtitle } from "components/headings";

const Container = styled.div`
  padding: 0 var(--padding-sm) calc(var(--padding-sm) * 2);
  display: grid;
  height: calc(100vh - 50px);
  align-items: center;
  justify-items: center;
  background-image: var(--bg-main-section);

  @media screen and (min-width: 1025px) {
    padding: 0 var(--padding-lg);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr 3fr;
  }

  ${Title} {
    text-align: center;

    @media screen and (min-width: 1025px) {
      text-align: left;
      align-self: end;
      width: 100%;
    }
  }

  ${Subtitle} {
    text-align: center;
    color: var(--main-text);
    font-family: "Montserrat Alternates";
    line-height: 1.4rem;

    @media screen and (min-width: 1025px) {
      font-size: 0.8rem;
      text-align: left;
      grid-column: 1 / 2;
      grid-row: 2;
      justify-self: start;
      align-self: end;
      margin-bottom: 20px;
    }
  }
`;

const Illustration = styled.img`
  width: 100%;

  @media screen and (min-width: 1025px) {
    width: 500px;
    grid-row: 1 / 4;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1025px) {
    text-align: left;
    grid-column: 1 / 2;
    grid-row: 3;
    align-self: start;
    flex-direction: row;
    justify-content: start;
    width: 100%;
  }
`;

export { Container, Title, Illustration, Subtitle, BtnWrapper };
