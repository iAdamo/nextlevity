"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/layout/NavBar";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";
import ContactUs from "./contact";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";

const Contact = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <ContactUs />
      <ContactForm />
      <Newsletter />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default Contact;
