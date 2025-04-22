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
    <VStack className="md:p-0 p-4 md:mx-0">
      <HStack className="flex-wrap justify-between md:px-20 md:py-10 rounded-lg md:gap-y-0 gap-y-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.url}
            className="md:w-60 w-40 h-full transform transition-transform duration-300 hover:scale-105 "
          >
            <Card className="justify-between items-center rounded-3xl shadow-hard-5 md:gap-2">
              <VStack className="w-full h-40">
                <Image
                  className="object-cover w-full h-40 rounded-3xl"
                  src={category.image}
                  alt={category.title}
                  width={1900}
                  height={1900}
                />
              </VStack>

              <VStack className="md:h-40 h-40 border-0 justify-start items-center drop-shadow-lg gap-2">
                <Heading size="xs" className="text-center md:text-lg">
                  {category.title}
                </Heading>
                <Text size="xs" className="md:text-[16px] md:leading-6">
                  {category.description}
                </Text>
              </VStack>
              <Icon
                as={ChevronRightIcon}
                size="md"
                className="bg-brand-0 md:w-6 md:h-6 rounded-full"
              />
            </Card>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default Categories;
