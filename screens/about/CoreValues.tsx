import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";

const CoreValues = () => {
  const values = [
    {
      title: "New Frontier",
      value: "Innovation",
      description:
        "Our commitment to excellence drives us to explore new frontiers and deliver groundbreaking solutions. We believe in the power of technology to transform lives and industries. At Nextlevity, innovation is at the core of everything we do.",
      image: "/assets/about/value0.jpeg",
    },
    {
      title: "Open Book",
      value: "Transparency",
      description:
        "The company is committed to maintaining clear and transparent communication throughout every campaign. We will provide measurable results to demonstrate the effectiveness and success of our efforts. Our goal is to build trust and deliver outstanding outcomes for our clients.",
      image: "/assets/about/value1.jpeg",
    },
    {
      title: "Common Goal",
      value: "Collaboration",
      description:
        "We partner with clients to create personalized marketing solutions. By understanding their goals, we develop tailored strategies that drive success and deliver measurable results.",
      image: "/assets/about/value2.jpeg",
    },
    {
      title: "Quality and and Achievement",
      value: "Excellence",
      description:
        "Nextlevity is dedicated to exceeding expectations in every project we undertake. We strive to deliver exceptional results by going above and beyond the standard requirements.",
      image: "/assets/about/value3.jpeg",
    },
  ];
  return (
    <VStack className="m-20 gap-16">
      <VStack className="items-start justify-start">
        <Text className="py-2 px-4 rounded-3xl border border-brand-1 block">
          Our Values
        </Text>
        <Text size="3xl">Our Core Values</Text>
      </VStack>
      <VStack className="gap-8">
        {values.map((value, index) => (
          <HStack className="justify-between mt-2 gap-8" key={index}>
            <VStack className="w-[65%] p-4 gap-2 border-t-2">
              <Text size="sm">{value.title}</Text>
              <Text size="2xl" className="font-semibold">
                {value.value}
              </Text>
              <Text>{value.description}</Text>
            </VStack>
            <VStack className="h-auto w-[35%] rounded-2xl">
              <Image
                className="object-cover h-52 w-full rounded-2xl"
                src={value.image}
                alt="Hero Image"
                width={400}
                height={400}
              />
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default CoreValues;
