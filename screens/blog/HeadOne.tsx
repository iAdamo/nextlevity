import {
  VStack,
  HStack,
  Card,
  Heading,
  Text,
} from "@/components/ui";
import Image from "next/image";

const HeadOne = () => {
  return (
    <VStack className="mt-20 gap-8">
      <VStack className="gap-8 justify-center items-center px-72">
        <Heading size="3xl" className="text-center">
          Empowering Your Brand with Innovative Marketing Solutions
        </Heading>
        <Text size="md" className="text-center">
          We blend creativity and strategy to elevate your business and drive
          results. Let&apos;s create something extraordinary together.
        </Text>
      </VStack>
      <VStack className="justify-center items-center">
        <VStack className="hidden w-1/2 md:flex justify-center items-center">
          <Image
            className="object-cover h-96 justify-center items-center"
            src="/assets/homepage/homemage3.jpeg"
            alt="Features"
            width={1920}
            height={1080}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default HeadOne;
