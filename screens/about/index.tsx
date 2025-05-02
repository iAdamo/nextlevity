"use client";

import TeamSection from "@/screens/about/TeamSection";
import AboutUs from "./AboutUs";
import HeadOne from "./HeadOne";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";
import MoreInfo from "./MoreInfo";

const About = () => {
  return (
    <main className="space-y-10 md:space-y-20">
      <HeadOne />
      <AboutUs />
      <OurMission />
      <CoreValues />
      <MoreInfo />
      <TeamSection />
    </main>
  );
};

export default About;
