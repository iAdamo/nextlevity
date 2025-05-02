import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import VideoPlayer from "@/components/media/VideoPlayer";

const HeadOne = () => {
  return (
    <VStack className="md:px-20 md:my-10 mt-4 md:gap-8 gap-4">
      <VStack className="gap-8 justify-center items-center">
        <Heading size="lg" className="md:px-32 px-6 md:text-4xl text-center">
          Empowering Your Brand with Innovative Marketing Solutions
        </Heading>
        <Text size="sm" className="md:px-52 px-6 md:text-lg text-center">
          We blend creativity and strategy to elevate your business and drive
          results. Let&apos;s create something extraordinary together.
        </Text>
      </VStack>
      <VStack className="justify-center items-center">
        <HStack className="w-full justify-center items-center">
          <VideoPlayer className="w-full md:mx-10 object-fill md:h-96 h-72 md:rounded-lg" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default HeadOne;
