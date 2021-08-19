import { GlobalStyle } from "global/style";
import Menu from "components/menu";
import { Container } from "./style";

function Layout({ children }) {
  const sections = [
    { name: "my Skills", id: "features" },
    { name: "my XP", id: "cards" },
    { name: "more", id: "dropdowns" },
    { name: "contact", id: "footer" },
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
