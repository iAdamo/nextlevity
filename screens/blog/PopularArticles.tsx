import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const articles = [
  {
    title:
      "Saving Your Business from the Brink: Strategies for Revival and Growth",
    image: "/assets/blog/blog4.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
    link: "/blog/ggg",
  },
  {
    title: "The Role of Chatbots in Customer Experience",
    image: "/assets/blog/blog2.jpeg",
    author: "Tiffany Wells",
    role: "Editor, NextLevity",
    date: "Feb 13",
    link: "/blog/ggg",
  },
];

const ArticleCard = ({ article }: { article: (typeof articles)[0] }) => (
  <Card className="relative md:w-[605px] w-[260px] h-[295px] md:h-[686px] p-0">
    <Image
      className="object-cover w-full h-full rounded-3xl"
      src={article.image}
      alt={article.title}
      width={3200}
      height={3000}
    />
    <VStack className="absolute inset-0 justify-between p-3 pb-0 items-start">
      <Heading
        size="sm"
        className="py-1 px-4 bg-white text-brand-1 md:text-xl text-center font-normal rounded-full"
      >
        Featured
      </Heading>
      <Link href={article.link}>
        <VStack className="bg-[#FFFFFF80]  rounded-2xl justify-between p-1">
          <p
            className="text-white md:text-4xl text-lg font-extrabold"
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
      </Link>
    </VStack>
  </Card>
);

const PopularArticles = () => {
  return (
    <VStack className="md:px-20 px-4 md:gap-20 gap-10">
      <HStack className="justify-between items-center gap-1">
        <VStack className="gap-4">
          <Heading size="lg" className="md:text-3xl">
            Popular Articles
          </Heading>
          <Text size="sm" className="md:text-xl">
            Good content isn&apos;t about good storytelling. It&apos;s about
            telling a true story well.
          </Text>
        </VStack>
        <Link
          href="#"
          className="md:py-2 py-1 md:px-4 px-2 hover:bg-brand-0 border border-brand-1 font-bold text-brand-1 md:rounded-full rounded-lg w-32 text-center md:text-lg text-sm"
        >
          View all
        </Link>
      </HStack>

      {/* Desktop View */}
      <HStack className="hidden md:flex gap-20 items-center justify-between">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </HStack>

      {/* Mobile View */}
      <Swiper
        className="md:hidden w-[22rem] h-[21rem]"
        spaceBetween={16}
        slidesPerView={1.2}
        modules={[Pagination]}
        pagination={{ clickable: true }}
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

export default PopularArticles;
