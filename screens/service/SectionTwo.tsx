import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Card } from "@/components/ui/card";
import {
  serviceTwo,
  serviceThree,
  serviceFour,
  serviceFive,
  serviceEleven,
} from "@/public/assets/service";

const cardData = [
  {
    title: "Customized and Innovative Solution",
    description:
      "We offer personalized digital marketing strategies that align with your unique business needs, leveraging innovative technologies for maximum impact.",
  },
  {
    title: "Comprehensive Service",
    description:
      "From social media management to SEO and analytics, our end-to-end solutions ensure a cohesive and effective marketing approach.",
  },
  {
    title: "Proven Success",
    description:
      "Our track record of delivering outstanding results and client satisfaction speaks for itself. Partner with us for reliable and impactful digital marketing.",
  },
];

const sections = [
  {
    title: "Digital Marketing",
    items: [
      "Social Media",
      "Campaign Strategy",
      "Campaign Management",
      "Content Strategy Marketing",
      "Automation",
      "Marketing Insights",
      "Analytics and Brand Kit",
    ],
    image: serviceTwo,
    reverse: false,
  },
  {
    title: "Content Marketing",
    items: [
      "Graphic Design",
      "Copywriting",
      "Animation",
      "Photography",
      "Video Production",
    ],
    image: serviceThree,
    reverse: true,
  },
  {
    title: "Social Media",
    items: [
      "Analytics and Performance Tracking",
      "Community Engagement and Growth",
      "Instagram, Tiktok, Facebook, Linkedin",
      "Pay-Per-Click Advertising",
    ],
    image: serviceFour,
    reverse: false,
  },
  {
    title: "Technology",
    items: [
      "Web Design and App Development",
      "Mobile Apps",
      "UI/UX Design",
      "Logistics",
      "Technology Consulting",
      "Cybersecurity",
      "Technical Support",
      "CRM",
    ],
    image: serviceFive,
    reverse: true,
  },
];

const SectionTwo = () => {
  return (
    <VStack className="md:px-20 px-4 gap-10">
      <Heading size="xl" className="md:text-4xl font-semibold">
        Why Choose NextLevity?
      </Heading>

      {/* Card Section */}
      <VStack className="md:flex-row gap-6">
        <VStack className="md:w-1/2 gap-10 pr-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="bg-[#FFCA9A] gap-4 h-full rounded-2xl"
            >
              <Heading size="sm" className="md:text-lg">
                {card.title}
              </Heading>
              <Text size="sm" className="md:text-lg font-semibold md:leading-7">
                {card.description}
              </Text>
            </Card>
          ))}
        </VStack>
        <VStack className="md:w-1/2 md:h-[684px] h-96 md:px-6 p-4 md:py-12 md:ml-20 bg-[#43255F66]">
          <Image
            className="object-cover h-full rounded-3xl shadow-lg"
            src={serviceEleven}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
      </VStack>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <VStack
          key={index}
          className={`md:flex-row flex-col-reverse gap-8 mb-4 md:gap-0 md:p-10 ${section.reverse ? "md:flex-row-reverse" : ""}`}
        >
          <VStack className="md:w-1/2 px-4">
            <Image
              className="object-cover md:h-80 h-48 rounded-3xl shadow-xl"
              src={section.image}
              alt={`${section.title} Image`}
              width={1200}
              height={800}
            />
          </VStack>
          <VStack
            className={`md:w-1/2 gap-2 md:gap-0 items-center ${
              section.reverse ? "md:items-start" : "md:items-end"
            }`}
          >
            <Heading size="xl" className="md:text-4xl font-normal text-brand-0 md:mb-5">
              {section.title}
            </Heading>
            <VStack
              className={`gap-2 items-center ${
                section.reverse ? "md:items-start" : "md:items-end"
              }`}
            >
              {section.items.map((item, i) => (
                <Text size="sm" className="md:text-xl" key={i}>{item}</Text>
              ))}
            </VStack>
          </VStack>
        </VStack>
      ))}
    </VStack>
  );
};

export default SectionTwo;