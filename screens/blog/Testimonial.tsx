import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";

const Testimonial = () => {
  return (
    <VStack className="px-20 gap-10">
      <HStack className="justify-between">
        <Heading size="2xl">Testimonial</Heading>
        <Link
          href="#"
          className="py-2 px-4 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 rounded-full w-32 text-center"
        >
          View all
        </Link>
      </HStack>
      <HStack className="shadow-lg">
        <VStack className="w-[45%]">
          <Image
            className="object-cover w-full h-full"
            src="/assets/blog/blog7.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
        </VStack>
        <VStack className="w-[55%] p-8  justify-between items-start">
          <Heading className="py-1 px-4 bg-white text-brand-1 border border-brand-1 text-center font-normal rounded-full">
            Featured
          </Heading>
          <Heading size="3xl">How Chill Republic doubled their Revenue </Heading>
          <Text>
            NextLevity helped Chill Republic double their revenue by
            implementing targeted digital marketing strategies, enhancing
            their...
          </Text>
          <VStack>
            <Text className="font-semibold">Tiffany wells</Text>
            <Text className="font-semibold">Editor, NextLevity</Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Testimonial;
