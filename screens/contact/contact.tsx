import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { contact0 } from "@/public/assets/contacts";

const ContactUs = () => {
  return (
    <VStack className="shadow-brand-0 shadow-md mb-10">
      <Image
        src={contact0}
        alt="Contact Us"
        width={1920}
        height={1080}
        className="object-cover w-full h-[40rem]"
      />

      <VStack className="mt-20 gap-4 absolute inset-0">
        <VStack className="gap-4 justify-center items-center px-56 pt-20">
          <Heading size="4xl" className="text-center text-white">
            Contact Our Team
          </Heading>

          <Text size="2xl" className="text-center text-white leading-loose ">
            Should you require assistance with our product or scaling on our
            platform, our dedicated team is prepared to provide support and
            ensure a seamless onboarding experience within 15 minutes.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ContactUs;
