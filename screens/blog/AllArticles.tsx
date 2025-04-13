import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { usePathname } from "next/navigation";

const AllArticles = () => {
  const pathname = usePathname();
  return (
    <VStack className="px-20 gap-14">
      <VStack className="gap-20">
        <HStack className="justify-between items-center">
          <VStack className="gap-4">
            <Heading size="2xl">All Articles</Heading>
            {pathname === "/blog" && (
              <Text className="leading-8">
                Good content isn&apos;t about good storytelling. It&apos;s about{" "}
                <br />
                telling a true story well.
              </Text>
            )}
          </VStack>
          <Link
            href="#"
            className="py-2 px-4 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 rounded-xl w-32 text-center"
          >
            View all
          </Link>
        </HStack>
        {pathname === "/blog" && (
          <HStack className="items-center justify-center gap-20">
            <Card className="relative w-2/5 h-[30rem] p-0">
              <Image
                className="object-cover w-full h-full rounded-3xl"
                src="/assets/blog/blog8.jpeg"
                alt="Hero Image"
                width={3200}
                height={3000}
              />
              <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
                <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
                  Featured
                </Heading>
                <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl p-1 justify-between">
                  <p
                    className="text-white text-3xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                    }}
                  >
                    The Impact of AR and VR on Digital Marketing
                  </p>
                  <HStack className="justify-between px-2">
                    <HStack className="gap-2 ml-4">
                      <VStack className="w-5 h-5">
                        <Box className="bg-white w-5 h-5 rounded-full"></Box>
                      </VStack>
                      <VStack>
                        <Text className="font-semibold">Tiffany wells</Text>
                        <Text className="font-semibold">
                          Editor, NextLevity
                        </Text>
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
                src="/assets/blog/blog9.jpeg"
                alt="Hero Image"
                width={3200}
                height={3000}
              />
              <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
                <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
                  Featured
                </Heading>
                <VStack className="bg-[#FFFFFF80] h-1/3 rounded-2xl p-1 justify-between">
                  <p
                    className="text-white text-3xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                    }}
                  >
                    Harnessing the Power of Influencer Marketing
                  </p>
                  <HStack className="justify-between px-2">
                    <HStack className="gap-2 ml-4">
                      <VStack className="w-5 h-5">
                        <Box className="bg-white w-5 h-5 rounded-full"></Box>
                      </VStack>
                      <VStack>
                        <Text className="font-semibold">Tiffany wells</Text>
                        <Text className="font-semibold">
                          Editor, NextLevity
                        </Text>
                      </VStack>
                    </HStack>
                    <Text className="font-semibold">Feb 13</Text>
                  </HStack>
                </VStack>
              </VStack>
            </Card>
          </HStack>
        )}
      </VStack>
      <HStack className="justify-between">
        <Card className="relative w-[30%] h-[24rem] p-0">
          <Image
            className="object-cover w-full h-full rounded-3xl"
            src="/assets/blog/blog10.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
          <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
            <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
              Featured
            </Heading>
            <VStack className="bg-[#FFFFFF80] rounded-2xl p-1 justify-between">
              <p
                className="text-white text-2xl font-extrabold"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                }}
              >
                Leveraging User-Generated Content for Authentic Engagement
              </p>
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
        <Card className="relative w-[30%] h-[24rem] p-0">
          <Image
            className="object-cover w-full h-full rounded-3xl"
            src="/assets/blog/blog11.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
          <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
            <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
              Featured
            </Heading>
            <VStack className="bg-[#FFFFFF80] rounded-2xl p-1 justify-between">
              <p
                className="text-white text-2xl font-extrabold"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                }}
              >
                Personalization Power: Tailoring Campaigns for Maximum Impact
              </p>
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
        <Card className="relative w-[30%] h-[24rem] p-0">
          <Image
            className="object-cover w-full h-full rounded-3xl"
            src="/assets/blog/blog12.jpeg"
            alt="Hero Image"
            width={3200}
            height={3000}
          />
          <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
            <Heading className="py-1 px-4 bg-white text-brand-1 text-center font-normal rounded-full">
              Featured
            </Heading>
            <VStack className="bg-[#FFFFFF80] rounded-2xl p-1 justify-between">
              <p
                className="text-white text-2xl font-extrabold"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                }}
              >
                Content is King: Crafting Compelling Stories for Your Audience
              </p>
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

export default AllArticles;
