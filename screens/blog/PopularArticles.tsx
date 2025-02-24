import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";

const PopularArticles = () => {
  return (
    <VStack className="p-20 gap-20">
      <HStack className="justify-between items-center">
        <VStack className="gap-4">
          <Heading size="2xl">Popular Articles</Heading>
          <Text>
            Good content isn&apos;t about good storytelling. It&apos;s about
            telling a true story well.
          </Text>
        </VStack>
        <Link
          href="#"
          className="py-2 px-4 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 rounded-full w-32 text-center"
        >
          View all
        </Link>
      </HStack>
      <HStack className="gap-20 items-center justify-center">
        <Card className="relative w-2/5 h-[30rem] p-0">
          <Image
            className="object-cover w-full h-full rounded-3xl"
            src="/assets/blog/blog4.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
          <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
            <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
              Featured
            </Heading>
            <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl justify-between">
              <Heading size="xl" className="text-white">
                Saving Your Business from the Brink: Strategies for Revival and
                Growth
              </Heading>
              <HStack className="justify-between px-2">
                <HStack className="gap-2 ml-4">
                  <VStack className="w-5 h-5">
                    <Box className="bg-white w-5 h-5 rounded-full"></Box>
                  </VStack>
                  <VStack>
                    <Text className="font-semibold">Tiffany wells</Text>
                    <Text className="font-semibold">Editor, NextLevity</Text>
                  </VStack>
                </HStack>
                <Text className="font-semibold">Feb 13</Text>
              </HStack>
            </VStack>
          </VStack>
        </Card>
        <Card className="relative w-2/5 h-[30rem] p-0">
          <Image
            className="object-cover w-full h-full rounded-3xl"
            src="/assets/blog/blog2.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
          <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
            <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
              Featured
            </Heading>
            <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl justify-between">
              <Heading size="xl" className="text-white">
                Saving Your Business from the Brink: Strategies for Revival and
                Growth
              </Heading>
              <HStack className="justify-between px-2">
                <HStack className="gap-2 ml-4">
                  <VStack className="w-5 h-5">
                    <Box className="bg-white w-5 h-5 rounded-full"></Box>
                  </VStack>
                  <VStack>
                    <Text className="font-semibold">Tiffany wells</Text>
                    <Text className="font-semibold">Editor, NextLevity</Text>
                  </VStack>
                </HStack>
                <Text className="font-semibold">Feb 13</Text>
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
};

export default PopularArticles;
