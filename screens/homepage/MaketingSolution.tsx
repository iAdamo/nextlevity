import Image from "next/image";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Icon, CheckCircleIcon } from "@/components/ui/icon";
import { homemage4 } from "@/public/assets/homepage";

const MarketingSolution = () => {
  return (
    <VStack className="p-10 pb-28 bg-brand-1">
      <HStack className="w-full gap-4 p-8">
        <VStack className="w-[40%]">
          <Image
            className="object-cover h-[30rem] w-[26rem] rounded-tr-[10rem]"
            src={homemage4}
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
                className="text-white rounded-full bg-brand-0"
              />
              <Text>Market Research</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-0"
              />
              <Text>Campaign Management Analysis</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-0"
              />
              <Text>CRM Implementation</Text>
            </Card>
            <Card className="w-96 items-center gap-8 rounded-3xl flex-row">
              <Icon
                as={CheckCircleIcon}
                size="lg"
                className="text-white rounded-full bg-brand-0"
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
