import { HStack, VStack, Heading, Text, Card } from "@/components/ui";
import Image from "next/image";

import dynamic from "next/dynamic";

const DynamicVideo = dynamic(() => import("@/components/media/VideoPlayer"), {
  ssr: false,
});

const VideoSection = () => {
  return (
    <VStack className="md:py-10 md:px-1 mx-4 rounded-3xl gap-2">
      <VStack>
        <Heading className="text-2xl md:text-3xl font-bold text-purple-950">
          See what success on NextLevity looks like
        </Heading>
        <Text className="hidden md:block text-lg">
          Google turned to our strategies to level up thier business
        </Text>
      </VStack>
      <VStack className="lg:flex-row mb-4 gap-10 rounded-md">
        <Card className="bg-gradient-to-b from-purple-50 to-yellow-50 lg:w-1/2 shadow-bottom">
          <DynamicVideo />
        </Card>
        <Card className="lg:w-1/2 p-5 bg-transparent rounded-lg gap-4">
          <HStack className="gap-2">
            <Image
              src="/assets/homepage/header.jpg"
              alt="Profile Image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <VStack>
              <Heading size="sm" className="mb-1">
                Agba John Doe
              </Heading>
              <Text size="sm">Sales Admninistrator</Text>
            </VStack>
          </HStack>
          <VStack className="">
            <Heading size="xl" className="mb-1">
              Help built-up Google business to a well know service
            </Heading>
            <Text size="sm">
              Ive been using this service for a few months now and it has been a
              game-changer for my daily routine. The team behind it is very
              responsive and helpful.
            </Text>
          </VStack>
        </Card>
      </VStack>
    </VStack>
  );
};

export default VideoSection;
