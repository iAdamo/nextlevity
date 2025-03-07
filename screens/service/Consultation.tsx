import Image from "next/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { serviceSix, serviceSeven } from "@/public/assets/service";

const Consultation = () => {
  return (
    <VStack className="bg-brand-1 p-20">
      <HStack>
        <VStack className="w-2/5 gap-10 pr-20">
          <VStack className="gap-4">
            <Heading size="4xl" className="text-white">
              Business Consultations
            </Heading>
            <Text size="md" className="text-white">
              Comprehensive business consultation services designed to help you
              navigate the complexities of the modern business landscape.
            </Text>
          </VStack>
          <VStack className="gap-8">
            <Heading size="xl" className="text-white">
              Features
            </Heading>
            <HStack className="bg-transparent gap-6">
              <VStack className="bg-brand-1 w-6 h-6">
                <Box className="bg-[#F64E2C] w-6 h-6 rounded-full"></Box>
              </VStack>
              <VStack className="gap-2">
                <Heading size="md" className="text-white font-semibold">
                  Event Planning
                </Heading>
                <Text className="text-white">
                  Plan and execute events, both online and offline, to promote
                  your brand and engage with your audience.Understanding market
                  trends, competitors, and customer needs.
                </Text>
              </VStack>
            </HStack>
            <HStack className="bg-transparent gap-6">
              <VStack className="bg-brand-1 w-6 h-6">
                <Box className="bg-[#F64E2C] w-6 h-6 rounded-full"></Box>
              </VStack>
              <VStack className="gap-2">
                <Heading size="md" className="text-white font-semibold">
                  Marketing Analysis
                </Heading>
                <Text className="text-white">
                  Understanding market trends, competitors, and customer needs.
                </Text>
              </VStack>
            </HStack>
            <HStack className="bg-transparent gap-6">
              <VStack className="bg-brand-1 w-6 h-6">
                <Box className="bg-[#F64E2C] w-6 h-6 rounded-full"></Box>
              </VStack>
              <VStack className="gap-2">
                <Heading size="md" className="text-white font-semibold">
                  Branding and Identity
                </Heading>
                <Text className="text-white">
                  Develop a strong brand identity with logo design, brand
                  guidelines, and messaging that resonates with your audience.
                </Text>
              </VStack>
            </HStack>
            <Link
              href="/contact/#form"
              className="bg-[#F64E2C] py-3 px-6 hover:bg-brand-4 font-bold text-white rounded-full w-60 text-center"
            >
              Book Consultation
            </Link>
          </VStack>
        </VStack>
        <HStack className="w-3/5 pl-10 justify-between">
          <Image
            className="object-cover w-80 h-96 mt-40 rounded-3xl shadow-lg"
            src={serviceSix}
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Image
            className="object-cover w-80 h-96 mt-10 rounded-3xl shadow-lg"
            src={serviceSeven}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Consultation;
