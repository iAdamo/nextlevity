import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { serviceEight, serviceNine, serviceTen } from "@/public/assets/service";

const SectionFour = () => {
  return (
    <VStack className="gap-8 px-10 py-20 items-center">
      <Heading size="2xl">
        Read about how we worked with these companies on their projects.
      </Heading>
      <HStack className="justify-between">
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src={serviceEight}
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text className="font-bold">Layla Candles</Text>
        </Card>
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src={serviceNine}
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text className="font-bold">Sweet Delight Bakery</Text>
        </Card>
        <Card className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center">
          <Image
            className="object-cover h-40 rounded-xl shadow-lg"
            src={serviceTen}
            alt="Hero Image"
            width={1900}
            height={1200}
          />
          <Text className="font-bold">Chill Replubic Restaurant</Text>
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
