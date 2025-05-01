import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { serviceEight, serviceNine, serviceTen } from "@/public/assets/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionFour = () => {
  const cardData = [
    {
      image: serviceEight,
      title: "Layla Candles",
    },
    {
      image: serviceNine,
      title: "Sweet Delight Bakery",
    },
    {
      image: serviceTen,
      title: "Chill Republic Restaurant",
    },
  ];
  return (
    <VStack className="md:gap-8 gap-4 md:px-10 px-4 md:py-20 items-center">
      <Heading size="lg" className="md:text-3xl text-center">
        Read about how we worked with these companies on their projects.
      </Heading>

      <HStack className="hidden md:flex md:justify-between">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-[30%] p-0 bg-transparent gap-4 justify-center items-center"
          >
            <Image
              className="object-cover h-40 rounded-xl shadow-lg"
              src={card.image}
              alt={card.title}
              width={1900}
              height={1200}
            />
            <Text size="lg" className="font-bold h-52">
              {card.title}
            </Text>
          </Card>
        ))}
      </HStack>
      <HStack className="md:hidden">
        <Swiper
          className="w-[22rem]"
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination]}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card className=" p-0 bg-transparent gap-4 justify-center items-center">
                <Image
                  className="object-cover h-32 rounded-xl shadow-lg"
                  src={card.image}
                  alt={card.title}
                  width={1900}
                  height={1200}
                />
                <Text size="sm" className="font-bold h-12">
                  {card.title}
                </Text>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
      <Link
        href="/contact/#form"
        className="bg-[#F64E2C] py-3 md:px-6 hover:bg-brand-4 font-bold text-white md:text-lg ml-10 md:ml-0 text-sm rounded-full md:w-60 w-40 text-center"
      >
        Read More
      </Link>
    </VStack>
  );
};

export default SectionFour;
