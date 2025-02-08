import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/Layout/NavBar";
import PreFooter from "@/components/Layout/PreFooter";
import Footer from "@/components/Layout/Footer";
import ContactUs from "./contact";

const Contact = () => {
  return (
    <SafeAreaView>
      <NavBar />
        <ContactUs />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default Contact;
