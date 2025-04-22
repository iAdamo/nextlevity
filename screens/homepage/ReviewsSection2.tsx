import { useState } from "react";
import { star } from "@/public/assets/icons";
import Image from "next/image";
import dynamic from "next/dynamic";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Pressable } from "@/components/ui/pressable";

const DynamicVideo = dynamic(() => import("@/components/media/VideoPlayer"), {
  ssr: false,
});

const reviews = [
  {
    title: "Exceptional Service",
    content:
      "Exceptional service and outstanding results! Our brand's visibility has skyrocketed...",
  },
  {
    title: "Professional Team",
    content:
      "Professional team with cutting-edge strategies. Their expertise in SEO and social media...",
  },
  {
    title: "Comprehensive Approach",
    content:
      "Their comprehensive approach to digital marketing has transformed our business...",
  },
];

const ReviewSection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <VStack className="md:px-20 px-4 pb-4 md:py-10 py-4 bg-[#F6692C38]">
      <Heading size="lg" className="text-center md:text-4xl md:pb-10">
        What our clients are saying about us
      </Heading>
      <VStack className="md:flex-row py-10 gap-10 justify-between md:items-end">
        <Card className="md:w-[55%] p-0 rounded-2xl">
          <DynamicVideo className="w-full rounded-2xl" />
        </Card>
        <Card className="hidden md:flex md:w-[45%] h-80 p-8 bg-[#D9D9D9] rounded-2xl gap-4">
          <VStack className="gap-2">
            <VStack>
              <Heading className="text-[#0C0B0B] font-light">
                Exceptional Service
              </Heading>
            </VStack>
            <HStack className="">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </HStack>
          </VStack>
          <Text className="text-[#777777]">
            Exceptional service and outstanding results! Our brand&apos;s
            visibility has skyrocketed thanks to their innovative strategies and
            dedicated team. We couldn&apos;t be happier with the results
          </Text>
          <VStack className="gap-2 mt-8">
            <Heading className="">Benson Wells</Heading>
            <Text className="text-[#77777780]">Nigeria - January 2025</Text>
          </VStack>
        </Card>
      </VStack>
      <HStack className="hidden md:flex py-10 gap-10 justify-between items-start">
        <Card className="w-1/2 h-80 p-8 bg-[#D9D9D9] rounded-2xl gap-4">
          <VStack className="gap-2">
            <VStack>
              <Heading className="text-[#0C0B0B] font-light">
                Professional Team
              </Heading>
            </VStack>
            <HStack className="">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </HStack>
          </VStack>
          <Text className="text-[#777777]">
            Professional team with cutting-edge strategies. Their expertise in
            SEO and social media marketing has significantly boosted our online
            presence. Highly recommend for all digital marketing needs.
          </Text>
          <VStack className="gap-2 mt-8">
            <Heading className="">Benson Wells</Heading>
            <Text className="text-[#77777780]">Nigeria - January 2025</Text>
          </VStack>
        </Card>
        <Card className="w-1/2 p-8 bg-[#D9D9D9] rounded-2xl gap-4">
          <VStack className="gap-2">
            <VStack>
              <Heading className="text-[#0C0B0B] font-light">
                Comprehensive approach
              </Heading>
            </VStack>
            <HStack className="">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </HStack>
          </VStack>
          <Text className="text-[#777777]">
            Their comprehensive approach to digital marketing has transformed
            our business. From content marketing to social media influencing,
            their efforts have led to a substantial increase in our customer
            engagement and sales. Their strategic insights and innovative
            techniques have made a remarkable difference in our overall success.
          </Text>
          <VStack className="gap-2 mt-8">
            <Heading className="">Benson Wells</Heading>
            <Text className="text-[#77777780]">Nigeria - January 2025</Text>
          </VStack>
        </Card>
      </HStack>
      {/** mobile view */}
      <HStack className="md:hidden transition-all gap-2 duration-500 flex-wrap">
        {reviews.map((review, index) => (
          <Pressable key={index} onPress={() => setActiveIndex(index)}>
            <Card
              className={`cursor-pointer w-80 transition-all duration-500 ease-in-out overflow-hidden rounded-2xl ${
                index === activeIndex
                  ? "first: bg-[#D9D9D9] w-80"
                  : " opacity-70 w-40 h-24 p-2"
              }`}
            >
              <VStack className="gap-2">
                <Heading size="sm" className="text-[#0C0B0B] font-light">
                  {review.title}
                </Heading>
                <HStack>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={star}
                      alt="star"
                      width={15}
                      height={15}
                    />
                  ))}
                </HStack>
                <Text size="sm" className="text-[#777777]">{review.content}</Text>
                <VStack className="gap-1 mt-2">
                  <Heading size="sm" className="">Benson Wells</Heading>
                  <Text size="sm" className="text-[#77777780]">
                    Nigeria - January 2025
                  </Text>
                </VStack>
              </VStack>
            </Card>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

export default ReviewSection2;
