import {
  HStack,
  VStack,
  Card,
  Text,
  Link,
  Heading,
  Icon,
  ChevronRightIcon,
} from "@/components/ui";
import Image from "next/image";

const Categories = () => {
  const categories = [
    {
      title: "Customer relationship management system",
      image: "/assets/homepage/categ0.jpeg",
      description:
        "We manages and analyzes customer interactions to improve relationships and drive growth.",
      url: "",
    },
    {
      title: "Content Management System",
      image: "/assets/homepage/categ1.jpeg",
      description:
        "We help our users create, manage and modify digital content easily.",
      url: "",
    },
    {
      title: "Influencer marketing platform",
      image: "/assets/homepage/categ2.jpeg",
      description:
        "We help brands find the right influencers, track campaigns and measure results to maximize impacts an loss",
      url: "",
    },
    {
      title: "Social media management tools",
      image: "/assets/homepage/categ0.jpeg",
      description:
        "Scheduling posts, Monitoring Engagements, analyzing Performance, and more.",
      url: "",
    },
  ];
  return (
    <VStack className="md:p-0 md:mt-12 p-4 md:mx-0">
      <HStack className="flex-wrap justify-center md:gap-14 gap-2 py-10 rounded-lg">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.url}
            className="md:w-60 md:h-auto w-24 transform transition-transform duration-300 hover:scale-105 -my-4"
          >
            <Card className="md:w-60 h-full justify-between items-center rounded-3xl shadow-hard-5 gap-2">
              <HStack className="">
                <Image
                  className="object-fill w-full md:h-40 h-24 rounded-3xl"
                  src={category.image}
                  alt={category.title}
                  width={1900}
                  height={1900}
                />
              </HStack>
              <HStack className="md:h-40 flex-wrap border-0 justify-center items-center drop-shadow-lg">
                <Heading size="md" className="hidden md:inline text-center">
                  {category.title}
                </Heading>
                <Text>{category.description}</Text>
              </HStack>
              <Icon
                as={ChevronRightIcon}
                size="xl"
                className="bg-brand-0 rounded-full"
              />
            </Card>
            <Text className="md:hidden text-center text-xs font-semibold">
              {category.title}
            </Text>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default Categories;
