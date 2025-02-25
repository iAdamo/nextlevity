import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import Link from "next/link";

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
        <VStack className="w-1/2 gap-8 py-8 items-start">
          <Text size="3xl">Vision </Text>
          <VStack className="gap-4">
            <Text>Nextlevity aspires to become Nigeria most </Text>
            <Text>recognized digital marketing agency, </Text>
            <Text>
              delivering creative campaigns and measurable ROI to clients.
            </Text>
          </VStack>

          <Link
            href="/contact/#form"
            className="mt-20 mx-auto text-xl font-bold text-white px-6 py-2 rounded-3xl bg-brand-0 hover:bg-brand-1"
          >
            Get in touch
          </Link>
        </VStack>
        <VStack className="w-2/3 px-4 items-start">
          <Image
            className="object-cover w-[22rem] h-96 rounded-3xl"
            src="/assets/about/about0.jpeg"
            alt="Hero Image"
            width={1000}
            height={500}
          />
          <Image
            className="object-cover w-[22rem] h-96 rounded-3xl absolute top-28 right-14"
            src="/assets/about/about1.jpeg"
            alt="Hero Image"
            width={1000}
            height={500}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default OurMission;
