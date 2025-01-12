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
  ];
  const categoryTwo = [
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
    <VStack className="bg-yellow-500 p-14 mx-14 gap-4 rounded-3xl">
      <Text className="text-3xl font-bold text-purple-950">CATEGORIES</Text>
      <Text className="text-lg">Browse through our categories</Text>
      <HStack className="justify-center gap-4 rounded-lg">
        {categoryOne.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => handleCategoryClick(category.title)}
            className="rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <Card className="w-52 h-52 rounded-lg justify-center items-center space-y-8">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
              />
              <Text className="text-lg font-bold">{category.title}</Text>
            </Card>
          </Pressable>
        ))}
      </HStack>
      <HStack className="justify-center gap-4 rounded-lg">
        {categoryTwo.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => handleCategoryClick(category.title)}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <Card className="w-52 h-52 rounded-lg justify-center items-center space-y-8">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
              />
              <Text className="text-lg font-bold">{category.title}</Text>
            </Card>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

export default Categories;
