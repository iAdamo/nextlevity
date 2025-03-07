import Image from "next/image";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Icon, CheckCircleIcon } from "@/components/ui/icon";
import { Link, LinkText } from "@/components/ui/link";
import { homemage3 } from "@/public/assets/homepage";

const MoreInfo = () => {
  const info = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility on search engines to attract organic traffic.",
    },
    {
      title: "Content Marketing",
      description:
        "Create and distribute valuable content to attract and engage your target audience.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Run targeted ads on search engines and social media to drive immediate traffic and conversions.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Run targeted ads on search engines and social media to drive immediate traffic and conversions.",
    },
  ];
  return (
    <VStack className="-mt-10">
      <VStack className="gap-2 justify-center items-center px-72">
        <Heading size="3xl" className="text-center">
          Your Reliable digital Marketing Partner,
        </Heading>
        <Heading size="3xl" className="text-center">
          Boosting Business Growth
        </Heading>
        <Text size="md" className="text-center">
          We excel in crafting innovative marketing strategies that drive
          results. Our expert team is dedicated to elevating your brand and
          ensuring your success in the digital world.
        </Text>
      </VStack>
      <VStack className="md:px-16 md:py-10 p-4 md:flex-row justify-between items-center">
        <VStack className="md:w-2/3 gap-8">
          <HStack className="flex-wrap gap-8">
            <VStack className="gap-4">
              <Heading size="xl">
                Personalized Digital Marketing Experience
              </Heading>
              <Text size="md">
                We develop innovative strategies that not only resonate with
                your brand identity but also align seamlessly with your business
                objectives.
              </Text>
            </VStack>
            {info.map((item, index) => (
              <Card key={index} className="md:w-80 h-32 rounded-2xl shadow-md">
                <HStack className="gap-2">
                  <Icon
                    as={CheckCircleIcon}
                    size="xl"
                    className="text-white rounded-full bg-brand-0"
                  />
                  <Heading size="sm">{item.title}</Heading>
                </HStack>
                <Text className="ml-8">{item.description}</Text>
              </Card>
            ))}
          </HStack>
          <HStack>
            <Link href="/google.com">
              <LinkText className="font-bold text-brand-1 data-[hover=true]:text-yellow-400 data-[active=true]:text-yellow-300">
                Learn More...
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <VStack className="hidden w-1/2 md:flex justify-center items-center">
          <Image
            className="object-fill justify-center items-center"
            src={homemage3}
            alt="Features"
            width={400}
            height={500}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MoreInfo;
