import { star } from "@/public/assets/icons";
import Image from "next/image";
import dynamic from "next/dynamic";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const DynamicVideo = dynamic(() => import("@/components/media/VideoPlayer"), {
  ssr: false,
});

const ReviewSection2 = () => {
  return (
    <VStack className="mt-20 px-20 pb-4  bg-[#F6692C38]">
      <Heading size="3xl" className="text-center py-10">
        What our clients are saying about us
      </Heading>
      <HStack className="py-10 gap-10 justify-between items-end">
        <Card className="w-[55%] p-0 rounded-2xl">
          <DynamicVideo />
        </Card>
        <Card className="w-[45%] h-80 p-8 bg-[#D9D9D9] rounded-2xl gap-4">
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
      </HStack>
      <HStack className="py-10 gap-10 justify-between items-start">
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
    </VStack>
  );
};

export default ReviewSection2;
