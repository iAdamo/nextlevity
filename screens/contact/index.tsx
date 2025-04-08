"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import ContactUs from "./contact";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";

const Contact = () => {
  return (
    <SafeAreaView>
      <ContactUs />
      <ContactForm />
      <Newsletter />
    </SafeAreaView>
  );
};

export default Contact;
