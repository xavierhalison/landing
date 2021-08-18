import { GlobalStyle } from "global/style";
import Menu from "components/menu";
import { Container } from "./style";

function Layout({ children }) {
  const sections = [
    { name: "Início", id: "inicio" },
    { name: "Cards", id: "cards" },
    { name: "Features", id: "features" },
    { name: "Dropdowns", id: "dropdowns" },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu sections={sections} />
        {children}
      </Container>
    </>
  );
}

export default Layout;
