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
    <VStack className="px-20 gap-20">
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
      <HStack className="gap-20 items-center justify-between">
        <Card className="relative w-[605px] h-[686px] p-0">
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
            <Link href="/blog/ggg">
              <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl justify-between p-1">
                <p
                  className="text-white text-4xl font-extrabold"
                  style={{
                    textShadow:
                      "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                  }}
                >
                  Saving Your Business from the Brink: Strategies for Revival
                  and Growth
                </p>
                <HStack className="justify-between px-2">
                  <HStack className="gap-2 ml-4">
                    <VStack className="w-5 h-5">
                      <Box className="bg-white w-5 h-5 rounded-full"></Box>
                    </VStack>
                    <VStack>
                      <Text className="font-semibold text-black">
                        Tiffany wells
                      </Text>
                      <Text className="font-semibold text-black">
                        Editor, NextLevity
                      </Text>
                    </VStack>
                  </HStack>
                  <Text className="font-semibold text-black">Feb 13</Text>
                </HStack>
              </VStack>
            </Link>
          </VStack>
        </Card>
        <Card className="relative w-[605px] h-[686px] p-0">
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
            <Link href="/blog/ggg">
              <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl justify-between p-1">
                <p
                  className="text-white text-4xl font-extrabold"
                  style={{
                    textShadow:
                      "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                  }}
                >
                  The Role of Chatbots in Customer Experience
                </p>
                <HStack className="justify-between px-2">
                  <HStack className="gap-2 ml-4">
                    <VStack className="w-5 h-5">
                      <Box className="bg-white w-5 h-5 rounded-full"></Box>
                    </VStack>
                    <VStack>
                      <Text className="font-semibold text-black">
                        Tiffany wells
                      </Text>
                      <Text className="font-semibold text-black">
                        Editor, NextLevity
                      </Text>
                    </VStack>
                  </HStack>
                  <Text className="font-semibold text-black">Feb 13</Text>
                </HStack>
              </VStack>
            </Link>
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
};

export default PopularArticles;
