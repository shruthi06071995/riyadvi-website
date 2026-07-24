import Hero from "../../components/home/Hero";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/testimonials/Testimonials";
import Portfolio from "../Portfolio/Portfolio";

function Home() {
  return (
    <>
    <Hero />
    <WhyChooseUs />
    <Services />
    <Portfolio />
    <Testimonials />
    </>
  );
}

export default Home;