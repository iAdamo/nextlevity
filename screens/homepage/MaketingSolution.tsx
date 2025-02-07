import {
  VStack,
  HStack,
  Card,
  Heading,
  Text,
  Icon,
  CheckCircleIcon,
} from "@/components/ui";
import Image from "next/image";

const MarketingSolution = () => {
  return (
    <VStack className="md:p-10 bg-brand-1">
      <HStack className="w-full gap-4 p-8">
        <VStack className="w-[40%]">
          <Image
            className="object-cover h-[30rem] w-[26rem] rounded-tr-[10rem]"
            src="/assets/homepage/homemage4.jpeg"
            alt="Hero Image"
            width={1900}
            height={1900}
          />
        </VStack>
        <VStack className="w-1/2 gap-8">
          <VStack className="gap-4">
            <Heading size="xl">All-encompassing Marketing Solution</Heading>
            <Text className="text-txt-primary">
              We offer all-encompassing marketing solutions designed to elevate
              your brand and drive business growth. Our comprehensive approach
              includes in-depth research, strategic planning, and innovative
              execution.
            </Text>
          </VStack>
          <VStack className="gap-6">
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-1"
              />
              <Text>Market Research</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-1"
              />
              <Text>Campaign Management Analysis</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-1"
              />
              <Text>CRM Implementation</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-1"
              />
              <Text>Data Analysis</Text>
            </Card>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MarketingSolution;
