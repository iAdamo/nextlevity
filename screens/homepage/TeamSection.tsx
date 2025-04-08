import Image from "next/image";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { micheal, peace, david, homemage1 } from "@/public/assets/homepage";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "ATUNDE MICHEAL",
      profession: "Co-Founder and CEO",
      photo: micheal,
    },
    {
      name: "Michael Smith",
      profession: "Software Engineer",
      photo: homemage1,
    },
    {
      name: "Emily Davis",
      profession: "Graphic Designer",
      photo: homemage1,
    },
    {
      name: "ADEYEYE PEACE",
      profession: "Product Designer",
      photo: peace,
    },
    {
      name: "Michael Smith",
      profession: "Software Engineer",
      photo: homemage1,
    },
    {
      name: "ADEBAYO DAVID",
      profession: "Social Media Manager",
      photo: david
    },
    {
      name: "Alice Johnson",
      profession: "Business Analyst",
      photo: homemage1,
    },
  ];
  return (
    <VStack className="p-2 gap-6 rounded-2xl">
      <VStack className="justify-center items-center gap-4">
        <Heading className="text-xl md:text-3xl">
          Meet the team that makes the magic happen
        </Heading>
        <Text size="md" className="hidden md:inline">
          Meet our diverse team of world class digital marketing, creator and
          problem solvers.
        </Text>
      </VStack>
      <HStack className="flex-wrap justify-center gap-6 py-4 mx-20">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="p-0 flex-shrink-0 justify-center items-center rounded-3xl"
          >
            <Image
              src={member.photo}
              alt="Profile Image"
              width={1920}
              height={1080}
              className="object-cover w-56 h-72 rounded-[3rem]"
            />
            <VStack className="w-full bottom-20 ">
              <VStack className="justify-center items-center mx-4 bg-white rounded-md">
                <Heading size="sm" className="">
                  {member.name}
                </Heading>
                <Text className="text-sm font-normal text-typography-700">
                  {member.profession}
                </Text>
              </VStack>
            </VStack>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
};

export default TeamSection;
