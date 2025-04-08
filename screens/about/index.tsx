"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import TeamSection from "@/screens/homepage/TeamSection";
import AboutUs from "./AboutUs";
import HeadOne from "./HeadOne";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";
import MoreInfo from "./MoreInfo";

const About = () => {
  return (
    <SafeAreaView>
      <HeadOne />
      <AboutUs />
      <OurMission />
      <CoreValues />
      <MoreInfo />
      <TeamSection />
    </SafeAreaView>
  );
};

export default About;
