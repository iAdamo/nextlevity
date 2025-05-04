import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";

const Testimonial = () => {
  return (
    <VStack className="md:px-20 px-4 gap-10">
      <HStack className="justify-between">
        <Heading size="lg" className="md:text-3xl">
          Testimonial
        </Heading>
        <Link
          href="#"
          className="md:py-2 py-1 md:px-4 px-2 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 md:rounded-full rounded-lg w-32 text-center md:text-lg text-sm"
        >
          View all
        </Link>
      </HStack>
      <VStack className="md:flex-row shadow-lg">
        <VStack className="md:w-[45%]">
          <Image
            className="object-cover w-full h-full"
            src="/assets/blog/blog7.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
        </VStack>
        <VStack className="md:w-[55%] p-8 gap-2 md:gap-0 justify-between items-start">
          <Heading
            size="sm"
            className="py-1 px-4 bg-white text-brand-1 md:text-xl text-center font-normal rounded-full"
          >
            Featured
          </Heading>
          <Heading size="lg" className="md:text-4xl">
            How Chill Republic doubled their Revenue
          </Heading>
          <Text size="sm" className="md:text-xl">
            NextLevity helped Chill Republic double their revenue by
            implementing targeted digital marketing strategies, enhancing
            their...
          </Text>
          <VStack>
            <Text size="sm" className="md:text-xl font-semibold text-black">
              Tiffany wells
            </Text>
            <Text size="sm" className="md:text-xl font-semibold text-black">
              Editor, NextLevity
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Testimonial;
