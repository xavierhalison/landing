import styled from "styled-components";

const CTA = styled.button`
  background-size: 230%;
  padding: 15px 30px;
  border: none;
  font-family: "Montserrat";

  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin: 5px 0;
  width: 240px;

  @media screen and (min-width: 1025px) {
    margin: 0;
    margin-right: 10px;
  }
`;

const MainCTA = styled(CTA)`
  color: var(--sub-text);
  background-image: var(--radial-gradient-1);
`;

const SubCTA = styled(CTA)`
  font-weight: 500;
  background-image: var(--linear-gradient-1);
  color: var(--main-text);
`;

export { MainCTA, SubCTA };
