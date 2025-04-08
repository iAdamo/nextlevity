"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import Header from "./Header";
import SectionTwo from "./SectionTwo";
import Consultation from "./Consultation";
import SectionFour from "./SectionFour";

const ServicePage = () => {
  return (
    <SafeAreaView>
      <Header />
      <SectionTwo />
      <Consultation />
      <SectionFour />
    </SafeAreaView>
  );
};

export default ServicePage;
