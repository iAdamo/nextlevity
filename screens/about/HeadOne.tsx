import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import VideoPlayer from "@/components/media/VideoPlayer";

const HeadOne = () => {
  return (
    <VStack className="mx-20 my-10 gap-8">
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
        <HStack className="w-full justify-center items-center">
          <VideoPlayer className="w-full mx-10 object-fill md:h-96 h-72 rounded-lg" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default HeadOne;
