import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import PreFooter from "@/components/Layout/PreFooter";
import Footer from "@/components/Layout/Footer";
import TeamSection from "../homepage/TeamSection";
import AboutUs from "./AboutUs";
import HeadOne from "./HeadOne";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";

const About = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HeadOne />
      <AboutUs />
      <OurMission />
      <CoreValues />
      <TeamSection />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default About;
