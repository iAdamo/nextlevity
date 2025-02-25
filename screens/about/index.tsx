"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/layout/NavBar";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/screens/homepage/TeamSection";
import AboutUs from "./AboutUs";
import HeadOne from "./HeadOne";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";
import MoreInfo from "./MoreInfo";

const About = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HeadOne />
      <AboutUs />
      <OurMission />
      <CoreValues />
      <MoreInfo />
      <TeamSection />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default About;
