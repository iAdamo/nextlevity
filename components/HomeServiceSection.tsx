import { Box, HStack, VStack, Divider, Button, ButtonText } from "./ui";
import Image from "next/image";

const HomeServiceSection = () => {
  return (
    <VStack className="bg-white">
      <Divider className="bg-white h-6" />
      <HStack className="justify-between bg-white flex-col-reverse lg:flex-row items-center h-full">
        <VStack className="items-center h-full w-full  pb-16 ">
          <VStack className="lg:relative flex-col justify-center items-center p-4 rounded-lg shadow-top-left">
            <Image
              className="rounded-lg"
              src="/assets/homepage/carousel.jpg"
              alt="Hero Image"
              width={320}
              height={320}
            />
            <Box className="hidden md:block lg:absolute lg:-bottom-12 lg:left-64 justify-center items-center w-52 lg:h-52 -z-10 shadow-bottom-right rounded-lg"></Box>
            <Image
              className="hidden md:block lg:absolute lg:-bottom-8 lg:left-[270px] justify-center items-center"
              src="/assets/homepage/carousel.jpg"
              alt="Hero Image"
              width={180}
              height={180}
            />
          </VStack>
        </VStack>
        <VStack className="w-full pl-6 lg:pl-0 pb-6 lg:justify-normal lg:items-start justify-center items-center h-full">
          <VStack className="h-full space-y-4">
            <p className="md:text-5xl text-4xl font-extrabold text-cyan-950">
              #1 Place To Find
              <br />
              The Perfect Strategy
            </p>
            <p className="md:text-5xl text-3xl font-extrabol text-cyan-950">
              Elevate Your Business
            </p>
            <p className=" text-cyan-950">
              With innovative strategies and creative solutions.
              <br />
              We help you reach your goals and grow your business.
            </p>
            <Button className="w-36 h-12 bg-green-700 data-[hover=true]:bg-green-600 data-[active=true]:bg-green-500">
              <ButtonText>Read More</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </HStack>
      <Divider className="bg-white h-6" />
    </VStack>
  );
};

export default HomeServiceSection;
