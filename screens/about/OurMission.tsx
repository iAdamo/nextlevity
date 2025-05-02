import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import Image from "next/image";
import Link from "next/link";
import { about0, about1 } from "@/public/assets/abouts";

const OurMission = () => {
  return (
    <VStack className="md:px-20 px-4 my-20 md:gap-36 gap-6">
      <VStack className="gap-4">
        <Text size="3xl" className="text-center md:text-start">
          Our Mission
        </Text>
        <Text className="text-center md:text-start">
          Nextlevity aims to help Nigerian businesses thrive in the digital age
          by providing innovative, results-driven marketing solutions. The
          company will elevate visibility, engagement, and growth to ensure
          client success.
        </Text>
      </VStack>
      <VStack className="md:flex-row justify-between md:gap-8 gap-4">
        <VStack className="md:w-1/2 gap-8 py-8 md:items-start">
          <Text size="3xl" className="text-center md:text-start">
            Vision
          </Text>
          <Text className="md:leading-8 md:px-32 text-center md:items-start">
            Nextlevity aspires to become Nigeria most recognized digital
            marketing agency, delivering creative campaigns and measurable ROI
            to clients.
          </Text>

          <Link
            href="/contact/#form"
            className="hidden md:flex mt-20 mx-auto text-xl font-bold text-white px-6 py-2 rounded-3xl bg-brand-0 hover:bg-brand-1"
          >
            Get in touch
          </Link>
        </VStack>
        <VStack className="md:w-2/3 md:px-4 items-start">
          <Image
            className="object-cover md:w-[22rem] w-48 h-64 md:h-96 rounded-3xl"
            src={about0}
            alt="Hero Image"
            width={1000}
            height={500}
          />
          <Image
            className="object-cover md:w-[22rem] w-48 h-64 md:h-96 rounded-3xl absolute md:top-28 top-16 md:right-14 right-0"
            src={about1}
            alt="Hero Image"
            width={1000}
            height={500}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default OurMission;
