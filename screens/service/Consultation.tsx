import Image from "next/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { serviceSix, serviceSeven } from "@/public/assets/service";

const Consultation = () => {
  const features = [
    {
      title: "Event Planning",
      description:
        "Plan and execute events, both online and offline, to promote your brand and engage with your audience.",
    },
    {
      title: "Marketing Analysis",
      description:
        "Understanding market trends, competitors, and customer needs.",
    },
    {
      title: "Branding and Identity",
      description:
        "Develop a strong brand identity with logo design, brand guidelines, and messaging that resonates with your audience.",
    },
  ];
  return (
    <VStack className="bg-brand-1 md:p-20 p-4">
      <VStack className="md:flex-row gap-8 mb-4 md:gap-0">
        <VStack className="md:w-2/5 gap-10 md:pr-20">
          <VStack className="gap-4">
            <Heading size="xl" className="md:text-4xl text-white">
              Business Consultations
            </Heading>
            <Text size="sm" className="md:text-lg text-white">
              Comprehensive business consultation services designed to help you
              navigate the complexities of the modern business landscape.
            </Text>
          </VStack>

          <VStack className="gap-8">
            <Heading size="lg" className="md:text-xl text-white">
              Features
            </Heading>
            {features.map((feature, index) => (
              <HStack key={index} className="gap-6">
                <VStack className="bg-brand-1 md:w-6 md:h-6 w-4 h-4">
                  <Box className="bg-[#F64E2C] md:w-6 md:h-6 w-4 h-4 rounded-full">
                    {" "}
                  </Box>
                </VStack>
                <VStack className="gap-2 pr-10">
                  <Heading
                    size="sm"
                    className="md:text-lg text-white font-semibold"
                  >
                    {feature.title}
                  </Heading>
                  <Text size="sm" className="md:text-lg text-white">
                    {feature.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
            <Link
              href="/contact/#form"
              className="bg-[#F64E2C] py-3 md:px-6 hover:bg-brand-4 font-bold text-white md:text-lg ml-10 md:ml-0 text-sm rounded-full md:w-60 w-40 text-center"
            >
              Book Consultation
            </Link>
          </VStack>
        </VStack>
        <HStack className="md:w-3/5 md:pl-10 justify-between">
          <Image
            className="object-cover md:w-80 md:h-96 w-40 h-64 mt-28 rounded-3xl shadow-lg"
            src={serviceSix}
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Image
            className="object-cover md:w-80 md:h-96 w-40 h-64 mt-10 rounded-3xl shadow-lg"
            src={serviceSeven}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Consultation;
