import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";

const BlogHeader = () => {
  return (
    <VStack className="relative">
      <Image
        src="/assets/blog/blog0.png"
        alt="Contact Us"
        width={1920}
        height={1080}
        className="object-fill w-3/5 ml-auto h-[40rem]"
      />

      <HStack className="mt-20 gap-4 px-20 absolute inset-0">
        <VStack className="gap-4 w-2/5">
          <Heading size="4xl" className="">
            Stay Ahead of the Curve with Expert Digital Marketing Insights
          </Heading>
          <Text className="text-3xl">
            Discover the latest trends and expert tips to stay ahead in digital
            marketing.
          </Text>
        </VStack>
        <VStack className="w-3/5">
          <Image
            className="object-cover w-[32rem] h-96 ml-40 rounded-3xl"
            src="/assets/blog/blog00.jpeg"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default BlogHeader;
