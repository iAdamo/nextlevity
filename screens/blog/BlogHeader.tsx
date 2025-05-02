import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <VStack className="md:flex-row gap-4 md:pl-20 px-4">
      <VStack className="md:w-1/2 py-4 justify-between gap-4 md:gap-0">
        <Heading size="xl" className="font-extrablack md:pr-52 md:5xl md:leading-[3.5rem]">
          Stay Ahead of the Curve with Expert Digital Marketing Insights
        </Heading>
        <VStack className="justify-center md:mr-[17rem]">
          <Text size="md" className="md:text-xl md:leading-10">
            Discover the latest trends and expert tips to stay ahead in digital
            marketing.
          </Text>
          <Link
            href="#"
            className="py-2 px-4 bg-brand-0 hover:bg-brand-1 border font-bold text-white rounded-full w-40 mx-auto mt-4 text-center"
          >
            Connect with us
          </Link>
        </VStack>
      </VStack>
      <VStack className="md:w-1/2 h-[28rem] items-end pr-2">
        <Image
          className="object-cover w-full h-full rounded-3xl"
          src="/assets/blog/blog00.jpeg"
          alt="Hero Image"
          width={1600}
          height={1600}
        />
      </VStack>
    </VStack>
  );
};

export default BlogHeader;
