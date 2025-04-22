import Image from "next/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Icon, CheckCircleIcon } from "@/components/ui/icon";
import { homemage4 } from "@/public/assets/homepage";

const MarketingSolution = () => {
  const solutions = [
    "Market Research",
    "Campaign Management Analysis",
    "CRM Implementation",
    "Data Analysis",
  ];
  return (
    <VStack className="md:p-10 p-4 md:pb-24 bg-brand-1">
      <VStack className="md:flex-row flex-col-reverse w-full md:gap-4 gap-y-10 md:p-8">
        <VStack className="md:w-[40%] md:px-20 px-10 md:py-0 py-4">
          <Image
            className="object-cover md:h-[30rem] md:w-[26rem] md:rounded-tr-[10rem] rounded-tr-[6rem]"
            src={homemage4}
            alt="Hero Image"
            width={1900}
            height={1900}
          />
        </VStack>
        <VStack className="md:w-1/2 gap-8">
          <VStack className="gap-4">
            <Heading size="lg" className="text-white md:text-black md:text-2xl">
              All-encompassing Marketing Solution
            </Heading>
            <Text size="sm" className="text-white md:text-black md:text-xl">
              We offer all-encompassing marketing solutions designed to elevate
              your brand and drive business growth. Our comprehensive approach
              includes in-depth research, strategic planning, and innovative
              execution.
            </Text>
          </VStack>

          <VStack className="gap-6">
            {solutions.map((solution) => (
              <Card
                key={solution}
                className="md:w-96 w-72 p-2 items-center md:gap-8 gap-4 rounded-3xl flex-row "
              >
                <Icon
                  as={CheckCircleIcon}
                  size="lg"
                  className="text-white rounded-full bg-brand-0"
                />
                <Text size="sm" className="font-bold md:text-lg">{solution}</Text>
              </Card>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MarketingSolution;
