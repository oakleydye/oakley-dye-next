import { Fragment } from "react";
import Menu from "../_components/menu";
import Hero from "./_components/hero";
import AboutSection from "./_components/about";
import PortfolioSection from "./_components/portfolio";
import ContactSection from "./_components/contact";
import Footer from "../_components/footer";

const Homepage: React.FC = () => {
  return (
    <Fragment>
      <Menu />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default Homepage;