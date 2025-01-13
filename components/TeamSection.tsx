import { VStack, HStack, Card, Text, Heading } from "@/components/ui";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      profession: "Business Analyst",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Michael Smith",
      profession: "Software Engineer",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Emily Davis",
      profession: "Graphic Designer",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Alice Johnson",
      profession: "Business Analyst",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Michael Smith",
      profession: "Software Engineer",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Emily Davis",
      profession: "Graphic Designer",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Alice Johnson",
      profession: "Business Analyst",
      photo: "/assets/homepage/icon-deal.png",
    },
    {
      name: "Emily Davis",
      profession: "Graphic Designer",
      photo: "/assets/homepage/icon-deal.png",
    },
  ];
  return (
    <VStack className="bg-purple-100 my-4 p-2 gap-4">
      <VStack className="justify-center items-center">
        <Text className="text-xl md:text-3xl font-bold text-purple-950">
          OUR TEAM
        </Text>
        <Text className="hidden md:block text-lg">Meet our team members</Text>
      </VStack>
      <HStack className="flex-nowrap justify-center gap-4 overflow-x-scroll">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="flex-shrink-0 justify-center items-center p-2 shadow-hard-5 rounded-lg"
          >
            <Image
              src={member.photo}
              alt="Profile Image"
              width={120}
              height={120}
              className="mb-2 rounded-md"
            />
            <VStack className="">
              <Heading size="sm" className="">
                {member.name}
              </Heading>
              <Text className="text-sm font-normal text-typography-700">
                {member.profession}
              </Text>
            </VStack>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
};

export default TeamSection;
