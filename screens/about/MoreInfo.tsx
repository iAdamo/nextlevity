import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
// import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import Link from "next/link";
import { about2, about3 } from "@/public/assets/abouts";

const MoreInfo = () => {
  return (
    <VStack className="bg-brand-1 relative">
      <VStack className="md:ml-48 md:mr-20 md:gap-28 px-4 md:px-0 gap-20">
        <VStack className="md:flex-row md:items-end h-full items-center gap-6 md:gap-0">
          <VStack className="md:w-2/5 h-full">
            <Image
              className="object-cover rounded-lg md:w-96 w-60 h-72 md:h-[30rem]"
              src={about2}
              alt="Hero Image"
              width={1500}
              height={1500}
            />
          </VStack>
          <VStack className="md:w-3/5 h-full gap-8">
            <Heading size="lg" className="text-[#F4F9FF] md:text-4xl md:pr-96 ">
              Client- Centric Approach
            </Heading>
            <Text
              size="md"
              className="text-[#F4F9FF] md:text-xl md:pr-20"
              text-center
            >
              Our commitment to excellence ensures that we consistently surpass
              client expectations, providing innovative solutions and
              outstanding service. At Nextlevity, we believe in pushing the
              boundaries to achieve unparalleled success in every endeavor.
            </Text>
            <Link
              href="/contact#form"
              className="md:w-52 w-40 mx-auto md:text-xl text-md font-bold text-center text-white rounded-3xl md:p-3 p-2 bg-brand-0 hover:bg-brand-0"
            >
              Connect with us
            </Link>
          </VStack>
        </VStack>
        <VStack className="md:items-start md:flex-row-reverse flex-col-reverse h-full items-center gap-20 md:gap-0">
          <VStack className="md:w-2/5 h-full">
            <Image
              className="object-cover rounded-lg md:w-96 w-60 h-72 md:h-[30rem]"
              src={about3}
              alt="Hero Image"
              width={1500}
              height={1500}
            />
          </VStack>
          <VStack className="md:w-3/5 h-full gap-8">
            <Heading size="lg" className="text-[#F4F9FF] md:text-4xl md:pr-20">
              Know our Global Community
            </Heading>
            <Text size="md" className="text-[#F4F9FF] pr-20">
              At Nextlevity, we believe in the power of community and the
              importance of building strong, meaningful connections. Our
              community is made up of passionate individuals, clients, partners,
              and stakeholders who share our vision of innovation and
              excellence. There are 40+ meetups worldwide!
            </Text>
            <Link
              href="#"
              className="md:w-72 w-60 mx-auto md:text-xl text-md font-bold text-center text-white rounded-3xl md:p-3 p-2 bg-brand-0 hover:bg-brand-0"
            >
              Read the Documentation
            </Link>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MoreInfo;
