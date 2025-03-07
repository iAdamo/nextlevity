import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import Link from "next/link";
import { about2, about3 } from "@/public/assets/abouts";

const MoreInfo = () => {
  return (
    <VStack className="bg-brand-1 relative">
      <VStack className="ml-48 mr-20 gap-28">
        <HStack className="lg:flex-row items-end h-full">
          <VStack className="w-2/5  h-full">
            <Image
              className="object-cover rounded-lg w-96 h-[30rem]"
              src={about2}
              alt="Hero Image"
              width={1500}
              height={1500}
            />
          </VStack>
          <VStack className="w-3/5">
            <VStack className="h-full gap-8">
              <Heading size="2xl" className="text-[#F4F9FF] pr-96">
                Client- Centric Approach
              </Heading>
              <Text size="xl" className="text-[#F4F9FF] pr-20">
                Our commitment to excellence ensures that we consistently
                surpass client expectations, providing innovative solutions and
                outstanding service. At Nextlevity, we believe in pushing the
                boundaries to achieve unparalleled success in every endeavor.
              </Text>
              <Link
                href="/contact#form"
                className="w-52 text-xl font-bold text-center text-white rounded-3xl p-3 bg-brand-0 hover:bg-brand-0"
              >
                Connect with us
              </Link>
            </VStack>
          </VStack>
        </HStack>
        <HStack className="items-start flex-row-reverse h-full">
          <VStack className="w-2/5  h-full">
            <Image
              className="object-cover rounded-lg w-96 h-[30rem]"
              src={about3}
              alt="Hero Image"
              width={1500}
              height={1500}
            />
          </VStack>
          <VStack className="w-3/5">
            <VStack className="h-full gap-8">
              <Heading size="2xl" className="text-[#F4F9FF] pr-96">
                Know our Global Community
              </Heading>
              <Text size="xl" className="text-[#F4F9FF] pr-20">
                At Nextlevity, we believe in the power of community and the
                importance of building strong, meaningful connections. Our
                community is made up of passionate individuals, clients,
                partners, and stakeholders who share our vision of innovation
                and excellence. There are 40+ meetups worldwide!
              </Text>
              <Link
                href="#"
                className="w-72 text-xl font-bold text-center text-white rounded-3xl p-3 bg-brand-0 hover:bg-brand-0"
              >
                Read the Documentation
              </Link>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default MoreInfo;
