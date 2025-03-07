import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ChevronRightIcon } from "@/components/ui/icon";
import { categ0, categ1, categ2 } from "@/public/assets/homepage";

import Image from "next/image";

const Categories = () => {
  const categories = [
    {
      title: "Customer relationship management system",
      image: categ0,
      description:
        "We manages and analyzes customer interactions to improve relationships and drive growth.",
      url: "",
    },
    {
      title: "Content Management System",
      image: categ1,
      description:
        "We help our users create, manage and modify digital content easily.",
      url: "",
    },
    {
      title: "Influencer marketing platform",
      image: categ2,
      description:
        "We help brands find the right influencers, track campaigns and measure results to maximize impacts an loss",
      url: "",
    },
    {
      title: "Social media management tools",
      image: categ0,
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
