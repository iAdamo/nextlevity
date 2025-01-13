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
    <VStack className="my-4 gap-4">
      <VStack className="justify-center items-center">
        <Text className="text-3xl font-bold text-purple-950">OUR TEAM</Text>
        <Text className="text-lg">Meet our team members</Text>
      </VStack>

      <HStack className="justify-center p-4 gap-4 bg-red-500 overflow-x-auto">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="flex-shrink-0 justify-center items-center p-2 rounded-lg"
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

{
  /**
function App() {
  return (
    <Card key={index} className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
                src={member.photo}
                alt="Profile Image"
                width={50}
                height={50}
                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"

              />
              <VStack className="mb-6">
        <Heading size="md" className="mb-2">
{member.name}        </Heading>

      </VStack>
      <Text className="text-sm font-normal mb-2 text-typography-700">
{member.profession}      </Text>

    </Card>
  );
}
  */
}
