import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const ContactUs = () => {
  return (
    <VStack className="bg-[#D9D9D9] p-40 shadow-brand-0 shadow-md">
      <VStack className="pb-20 gap-4 ">
        <VStack>
          <Heading size="3xl" className="text-center">
            Contact Our Team
          </Heading>
        </VStack>
        <VStack className="gap-2">
          <Text size="xl" className="text-center">
            Should you require assistance with our product or scaling on our
          </Text>
          <Text size="xl" className="text-center">
            platform, our dedicated team is prepared to provide support and
            ensure a seamless onboarding
          </Text>
          <Text size="xl" className="text-center">
            experience within 15 minutes.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ContactUs;
