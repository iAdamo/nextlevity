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
        "Use social media platforms to build brand awareness and engage with your audience.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Run targeted ads on search engines and social media to drive immediate traffic and conversions.",
    },
  ];
  return (
    <VStack className="gap-10">
      <VStack className="gap-2 md:px-72 px-4">
        <Heading
          size="sm"
          className="text-center md:font-semibold font-extrablack md:text-4xl"
        >
          Your Reliable digital Marketing Partner, Boosting Business Growth
        </Heading>
        <Text size="sm" className="text-center md:text-lg md:leading-8">
          We excel in crafting innovative marketing strategies that drive
          results. Our expert team is dedicated to elevating your brand and
          ensuring your success in the digital world.
        </Text>
      </VStack>
      <VStack className="md:pl-16 md:py-10 px-4 md:flex-row justify-between items-center">
        <VStack className="md:w-2/3 gap-8 mb-10 md:mb-0">
          <VStack className="gap-4">
            <Heading
              size="sm"
              className=" md:font-semibold font-extrablack md:text-4xl"
            >
              Personalized Digital Marketing Experience
            </Heading>
            <Text size="sm" className="md:leading-8 md:text-lg md:pr-64">
              We develop innovative strategies that not only resonate with your
              brand identity but also align seamlessly with your business
              objectives.
            </Text>
          </VStack>
          <HStack className="flex-wrap gap-8">
            {info.map((item, index) => (
              <Card
                key={index}
                className="md:w-[23rem] w-3/4 md:h-28 md:py-2 rounded-2xl shadow-md gap-2"
              >
                <HStack className="gap-2">
                  <Icon
                    as={CheckCircleIcon}
                    size="md"
                    className="text-white rounded-full bg-brand-0"
                  />
                  <Heading size="xs" className="md:text-lg">
                    {item.title}
                  </Heading>
                </HStack>
                <Text size="xs" className="ml-7 md:text-md">
                  {item.description}
                </Text>
              </Card>
            ))}
          </HStack>
          <Link href="/google.com" className="hidden md:flex w-40 ml-10 mt-10">
            <LinkText className="font-bold text-[#7D26BB] data-[hover=true]:text-yellow-400 data-[active=true]:text-yellow-300">
              Learn More...
            </LinkText>
          </Link>
        </VStack>
        <VStack className="md:w-1/3">
          <Image
            className="object-cover"
            src={homemage3}
            alt="marketing_partner"
            width={1000}
            height={1000}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MoreInfo;
