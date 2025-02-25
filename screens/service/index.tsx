"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/layout/NavBar";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";
import Header from "./Header";
import SectionTwo from "./SectionTwo";
import Consultation from "./Consultation";
import SectionFour from "./SectionFour";

const ServicePage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <Header />
      <SectionTwo />
      <Consultation />
      <SectionFour />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default ServicePage;
