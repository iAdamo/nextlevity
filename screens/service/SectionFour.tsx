import Image from "next/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const SectionFour = () => {
  return (
    <VStack className="gap-8 p-20 items-center">
      <Heading size="2xl">
        Read about how we worked with these companies on their projects.
      </Heading>
      <HStack className="justify-between">
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src="/assets/service/service-eight.jpeg"
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text>Layla Candles</Text>
        </Card>
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src="/assets/service/service-nine.jpeg"
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text>Sweet Delight Bakery</Text>
        </Card>
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src="/assets/service/service-ten.jpeg"
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text>Chill Replubic Restaurant</Text>
        </Card>
      </HStack>
      <Link
        href="#"
        className="bg-[#F64E2C] py-3 px-6 hover:bg-brand-4 font-bold text-white rounded-xl w-40 text-center"
      >
        Read More
      </Link>
    </VStack>
  );
};

export default SectionFour;
