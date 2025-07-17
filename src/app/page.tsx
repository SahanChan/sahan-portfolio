import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import FeatureCards from "../sections/FeatureCards";
import ExperienceSection from "../sections/ExperienceSection";
import TechStack from "../sections/TechStack";
// import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import NavBar from "../components/NavBar";
// import LogoSection from "../components/LogoSection";
import Footer from "../sections/Footer";


export default function Home() {
  return (
      <>
          <NavBar/>
          <Hero/>
          <ShowcaseSection isOne={true}/>
          <ShowcaseSection isOne={false}/>
          {/*<LogoSection/>*/}
          <FeatureCards/>
          <ExperienceSection/>
          <TechStack/>
          {/*<Testimonials/>*/}
          <Contact/>
          <Footer/>
      </>
  );
}
