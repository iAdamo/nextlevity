import { VStack, HStack, Button, ButtonText } from "@/components/ui";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <HStack className="bg-yellow-700 -mt-32 flex-col lg:flex-row">
      <VStack className="lg:container bg-white">
        <VStack className="mt-32 md:pl-11 h-full p-6 py-16 bg-blue-800 justify-center  gap-4">
          <p className="md:text-5xl text-4xl font-extrabold">
            Find <span className="text-yellow-700">Marketing Strategies</span>
          </p>
          <p className="md:text-5xl text-3xl font-extrabol">
            Elevate Your Business
          </p>
          <p className="text-xs">
            With innovative strategies and creative solutions. We help you reach
            your goals and grow your business.
          </p>
          <Button className="w-32 h-12 bg-yellow-700 data-[hover=true]:bg-yellow-600 data-[active=true]:bg-yellow-500">
            <ButtonText>Get Started</ButtonText>
          </Button>
        </VStack>
      </VStack>
      <VStack className="lg:container bg-green-500">
        <VStack className="h-full ">
          <Image
          className="object-cover"
            src="/assets/homepage/carousel.jpg"
            alt="Hero Image"
            width={1920}
            height={1980}
          />
        </VStack>
      </VStack>
    </HStack>
  );
};

export default HomeHeader;
