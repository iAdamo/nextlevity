import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
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
const SectionTwo = () => {
  return (
    <VStack className="px-20 gap-10">
      <Heading size="3xl" className="font-semibold">
        Why Choose NextLevity?
      </Heading>
      <HStack className="">
        <VStack className="w-1/2 gap-10 pr-4">
          <Card className="bg-[#FFCA9A] gap-4 h-full rounded-2xl">
            <Heading size="lg">Customized and Innovative Solution </Heading>
            <Text size="lg" className="font-semibold leading-7">
              We offer personalized digital marketing strategies that align with
              your unique business needs, leveraging innovative technologies for
              maximum impact.
            </Text>
          </Card>
          <Card className="bg-[#FFCA9A] gap-4 h-full rounded-2xl">
            <Heading size="lg">Comprehensive Service</Heading>
            <Text size="lg" className="font-semibold leading-7">
              From social media management to SEO and analytics, our end-to-end
              solutions ensure a cohesive and effective marketing approach.
            </Text>
          </Card>
          <Card className="bg-[#FFCA9A] gap-4 h-full rounded-2xl">
            <Heading size="lg">Proven Success</Heading>
            <Text size="lg" className="font-semibold leading-7">
              Our track record of delivering outstanding results and client
              satisfaction speaks for itself. Partner with us for reliable and
              impactful digital marketing.
            </Text>
          </Card>
        </VStack>
        <VStack className="w-1/2 h-[684px] px-6 py-12 ml-20 bg-[#43255F66]">
          <Image
            className="object-cover h-full rounded-3xl shadow-lg"
            src={serviceEleven}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
      </HStack>
      <HStack className="p-10">
        <VStack className="w-1/2">
          <Image
            className="object-cover h-80 rounded-3xl shadow-lg"
            src={serviceTwo}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
        <VStack className="w-1/2 items-end">
          <Heading size="4xl" className="font-normal text-brand-0 mb-5">
            Digital Marketing
          </Heading>
          <VStack className="gap-2 items-end">
            <Text>Social Media</Text>
            <Text> Campaign Strategy </Text>
            <Text>Campaign Management</Text>
            <Text>Content Strategy Marketing</Text> <Text>Automation</Text>
            <Text>Marketing Insights</Text>
            <Text>Analytics and </Text>
            <Text>Brand Kit</Text>
          </VStack>
        </VStack>
      </HStack>
      <HStack className="p-10  flex-row-reverse">
        <VStack className="w-1/2">
          <Image
            className="object-cover h-80 rounded-3xl shadow-lg"
            src={serviceThree}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
        <VStack className="w-1/2 items-start">
          <Heading size="4xl" className="font-normal text-brand-0 mb-5">
            Content Marketing
          </Heading>
          <VStack className="gap-2 items-start">
            <Text>Graphic Design</Text>
            <Text>Copywriting</Text>
            <Text>Animation</Text>
            <Text>Photography</Text>
            <Text>Video Production</Text>
          </VStack>
        </VStack>
      </HStack>
      <HStack className="p-10">
        <VStack className="w-1/2">
          <Image
            className="object-cover h-80 rounded-3xl shadow-lg"
            src={serviceFour}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
        <VStack className="w-1/2 items-end">
          <Heading size="4xl" className="font-normal text-brand-0 mb-5">
            Social Media
          </Heading>
          <VStack className="gap-2 items-end">
            <Text>Analytics and Performance Tracking</Text>
            <Text>Community Engagement and Growth</Text>
            <Text>Instagram, Tiktok, Facebook, Linkedin</Text>
            <Text>Pay-Per-Click Advertising</Text>
          </VStack>
        </VStack>
      </HStack>
      <HStack className="p-10 flex-row-reverse">
        <VStack className="w-1/2">
          <Image
            className="object-cover h-80 rounded-3xl shadow-lg"
            src={serviceFive}
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </VStack>
        <VStack className="w-1/2 items-start">
          <Heading size="4xl" className="font-normal text-brand-0 mb-5">
            Technology
          </Heading>
          <VStack className="gap-2 items-start">
            <Text>Web Design and App Development</Text>
            <Text>Mobile Apps</Text>
            <Text>UI/UX Design</Text>
            <Text>Logistics</Text>
            <Text>Technology Consulting</Text>
            <Text>Cybersecurity</Text>
            <Text>Technical Support</Text>
            <Text>CRM</Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default SectionTwo;
