import {
  VStack,
  HStack,
  Card,
  Button,
  ButtonText,
  Heading,
  Text,
  Icon,
  CheckCircleIcon,
} from "@/components/ui";
import Image from "next/image";

const MoreInfo = () => {
  return (
    <VStack className="bg-purple-100 rounded-3xl m-4 md:px-16 md:py-10 p-4 md:flex-row justify-between items-center">
      <VStack className="md:w-1/2 gap-8">
        <VStack className="gap-4">
          <Heading size="2xl">
            NextLevity <span className="text-lg">Marketing Strategies</span>
          </Heading>
          <Heading size="3xl">
            The premium marketing solution for businesses
          </Heading>
        </VStack>

        <HStack className="flex-wrap md:gap-0 gap-2">
          {[
            {
              title: "Dedicated Hiring Experts",
              description:
                "Our team of seasoned digital marketing professionals ensures your campaigns are managed by industry experts, driving measurable success.",
            },
            {
              title: "Satisfaction Guarantee",
              description:
                "We are committed to delivering outstanding results, ensuring client satisfaction through data-driven strategies and transparent reporting.",
            },
            {
              title: "Advanced Management Tools",
              description:
                "Leverage our cutting-edge tools to track campaign performance, optimize strategies, and achieve superior business outcomes.",
            },
            {
              title: "Tailored Growth Strategies",
              description:
                "Our personalized marketing solutions are designed to align with your unique business needs, maximizing ROI and lead generation.",
            },
          ].map((item, index) => (
            <Card key={index} className="md:w-1/2  bg-transparent">
              <HStack className="gap-2 md:flex-col">
                <Icon
                  as={CheckCircleIcon}
                  size="xl"
                  className="text-yellow-500"
                />
                <Heading size="sm">{item.title}</Heading>
              </HStack>
              <Text>{item.description}</Text>
            </Card>
          ))}
        </HStack>

        <HStack>
          <Button className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300">
            <ButtonText>Try Now</ButtonText>
          </Button>
        </HStack>
      </VStack>
      <VStack className="hidden w-1/2 md:block">
        <Image
          className="object-cover"
          src="/assets/homepage/nextlevity_pro.png"
          alt="Features"
          width={700}
          height={700}
        />
      </VStack>
    </VStack>
  );
};

export default MoreInfo;
