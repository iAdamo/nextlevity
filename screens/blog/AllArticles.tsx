import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const articles = [
  {
    title: "The Impact of AR and VR on Digital Marketing",
    image: "/assets/blog/blog8.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
  },
  {
    title: "Harnessing the Power of Influencer Marketing",
    image: "/assets/blog/blog9.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
  },
  {
    title: "Leveraging User-Generated Content for Authentic Engagement",
    image: "/assets/blog/blog10.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
  },
  {
    title: "Personalization Power: Tailoring Campaigns for Maximum Impact",
    image: "/assets/blog/blog11.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
  },
  {
    title: "Content is King: Crafting Compelling Stories for Your Audience",
    image: "/assets/blog/blog12.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
  },
];

const ArticleCard = ({ article }: { article: (typeof articles)[0] }) => (
  <Card className="relative md:w-[30%] md:h-[24rem] w-[260px] h-[295px] p-0">
    <Image
      className="object-cover w-full h-full rounded-3xl"
      src={article.image}
      alt={article.title}
      width={3200}
      height={3000}
    />
    <VStack className="absolute inset-0 justify-between p-4 pb-0 items-start">
      <Heading
        size="sm"
        className="py-1 px-4 bg-white text-brand-1 md:text-xl text-center font-normal rounded-full"
      >
        Featured
      </Heading>
      <VStack className="bg-[#FFFFFF80] rounded-2xl p-1 justify-between">
        <p
          className="text-white text-2xl font-extrabold"
          style={{
            textShadow:
              "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
          }}
        >
          {article.title}
        </p>
        <HStack className="justify-between px-2">
          <HStack className="gap-2 md:ml-4">
            <VStack className="md:w-5 w-3 md:h-5 h-3">
              <Box className="bg-white md:w-5 w-3 md:h-5 h-3 rounded-full"></Box>
            </VStack>
            <VStack>
              <Text size="sm" className="md:text-xl font-semibold text-black">
                {article.author}
              </Text>
              <Text size="sm" className="md:text-xl font-semibold text-black">
                {article.role}
              </Text>
            </VStack>
          </HStack>
          <Text size="sm" className="md:text-xl font-semibold text-black">
            {article.date}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  </Card>
);

const AllArticles = () => {
  const pathname = usePathname();

  return (
    <VStack className="md:px-20 px-4 gap-14">
      <VStack className="gap-20">
        <HStack className="justify-between items-center">
          <VStack className="gap-4">
            <Heading size="lg" className="md:text-3xl">
              All Articles
            </Heading>
            {pathname === "/blog" && (
              <Text size="sm" className="md:text-xl md:leading-8">
                Good content isn&apos;t about good storytelling. It&apos;s about{" "}
                <br className="hidden md:inline" />
                telling a true story well.
              </Text>
            )}
          </VStack>
          <Link
            href="#"
            className="md:py-2 py-1 md:px-4 px-2 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 md:rounded-full rounded-lg w-32 text-center md:text-lg text-sm"
          >
            View all
          </Link>
        </HStack>

        {/* Featured Articles */}
        {pathname === "/blog" && (
          <HStack className="hidden md:flex items-center justify-center gap-20">
            {articles.slice(0, 2).map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </HStack>
        )}
      </VStack>

      {/* All Articles */}
      <HStack className="hidden md:flex justify-between">
        {articles.slice(2).map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </HStack>

      {/* Mobile View */}
      <Swiper
        className="md:hidden w-full h-[21rem]"
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default AllArticles;
