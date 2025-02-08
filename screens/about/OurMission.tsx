import { HStack, VStack, Text } from "@/components/ui";
import Image from "next/image";

const OurMission = () => {
  return (
    <VStack className="mx-20 my-20 gap-36">
      <VStack className="gap-4">
        <Text size="3xl" className="font-semibold">
          Our Mission
        </Text>
        <Text>
          Nextlevity aims to help Nigerian businesses thrive in the digital age
          by providing innovative, results-driven marketing solutions. The
          company will elevate visibility, engagement, and growth to ensure
          client success.
        </Text>
      </VStack>
      <HStack className="justify-between gap-8">
        <VStack className="gap-4 items-start">
          <Text size="3xl">Vision </Text>
          <Text>
            Nextlevity aspires to become Nigeria most recognized digital
            marketing agency, delivering creative campaigns and measurable ROI
            to clients.
          </Text>
        </VStack>
        <Image
          className="object-cover h-[28rem] rounded-2xl"
          src="/assets/homepage/homemage4.jpeg"
          alt="Hero Image"
          width={1000}
          height={500}
        />
      </HStack>
    </VStack>
  );
};

export default OurMission;
