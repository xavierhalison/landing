import Layout from "components/layout";
import MainSection from "components/sections/main";
import CardsSection from "components/sections/cards";
import FeaturesSection from "components/sections/features";
import DropdownTextsSection from "components/sections/dropdownTexts";
import FooterSection from "components/sections/footer";

function App() {
  return (
    <Layout>
      <MainSection />
      <FeaturesSection />
      <CardsSection />
      <DropdownTextsSection />
      <FooterSection />
    </Layout>
  );
}

export default App;
