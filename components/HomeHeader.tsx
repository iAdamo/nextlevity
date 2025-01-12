import { VStack, HStack, Button, ButtonText } from "@/components/ui";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <HStack className="-mt-32 flex-col-reverse md:flex-row h-full">
      <VStack className="md:container bg-gradient-to-r from-purple-800 to-yellow-800">
        <VStack className="md:mt-32 md:ml-11 h-full px-6 py-8 mt-0 md:p-0 md:py-0 justify-center gap-4">
          <p className="md:text-5xl text-4xl font-extrabold text-cyan-700">
            Find <span className="text-yellow-500">Marketing Strategies</span>
          </p>
          <p className="md:text-5xl text-3xl font-extrabol">
            Elevate Your Business
          </p>
          <p className="text-xs">
            With innovative strategies and creative solutions. We help you reach
            your goals and grow your business.
          </p>
          <Button className="w-32 h-12 bg-yellow-500 data-[hover=true]:bg-yellow-400 data-[active=true]:bg-yellow-300">
            <ButtonText>Get Started</ButtonText>
          </Button>
        </VStack>
      </VStack>
      <VStack className="md:container mt-32 lg:mt-0">
        <Image
          className="object-cover"
          src="/assets/homepage/carousel.jpg"
          alt="Hero Image"
          width={1920}
          height={1080}
        />
      </VStack>
    </HStack>
  );
};

export default HomeHeader;
