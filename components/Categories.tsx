import { HStack, VStack, Card, Text, Pressable } from "@/components/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    category = category.toLowerCase().replace(" ", "-");
    router.push(`/categories/${category}`);
  };

  const categoryOne = [
    {
      title: "Marketing",
      image: "/assets/homepage/icon-deal.png",
    },
    {
      title: "Finance",
      image: "/assets/categories/finance.jpg",
    },
    {
      title: "Business",
      image: "/assets/categories/business.jpg",
    },
    {
      title: "Technology",
      image: "/assets/categories/technology.jpg",
    },
    {
      title: "Technology",
      image: "/assets/categories/technology.jpg",
    },
    {
      title: "Marketing",
      image: "/assets/categories/marketing.jpg",
    },
    {
      title: "Finance",
      image: "/assets/categories/finance.jpg",
    },
    {
      title: "Business",
      image: "/assets/categories/business.jpg",
    },
    {
      title: "Technology",
      image: "/assets/categories/technology.jpg",
    },
    {
      title: "Technology",
      image: "/assets/categories/technology.jpg",
    },
  ];
  return (
    <VStack className="md:p-10 md:mt-4 p-4 md:mx-14 gap-4 rounded-3xl">
      <HStack className="flex-wrap justify-center md:gap-4 gap-2 rounded-lg">
        {categoryOne.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => handleCategoryClick(category.title)}
            className="h-auto justify-center items-center transform transition-transform duration-300 hover:scale-105"
          >
            <Card className="md:w-52 md:h-52 w-24 h-24 rounded-lg justify-center items-center shadow-hard-5 space-y-8">
              <Image
                className="md:w-100 md:h-100 w-20 h-20"
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
              />
              <Text className="hidden md:block md:text-lg text-md font-bold">
                {category.title}
              </Text>
            </Card>
            <Text className="md:hidden text-sm font-bold">
              {category.title}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

export default Categories;
