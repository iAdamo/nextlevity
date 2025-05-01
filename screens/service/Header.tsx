import Image from "next/image";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  bolt,
  loading,
  loader,
  metrize,
  cotton,
  shooting,
  divide,
  star,
  serviceOne,
} from "@/public/assets/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility",
      image: bolt,
      link: "#",
    },
    {
      title: "Social Media Marketing",
      description:
        "Nextlevity will create engaging campaigns on platforms like Instagram, Facebook, and LinkedIn.",
      image: loading,
      link: "#",
    },
    {
      title: "Pay-Per-Click(PPC) Advertising",
      description:
        "Nextlevity will drive targeted traffic through expertly managed Google Ads.",
      image: loader,
      link: "#",
    },
    {
      title: "Influencer Marketing",
      description:
        "Nextlevity will partner with local influencers to achieve authentic engagement.",
      image: metrize,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Unique brand identities will be crafted to help clients stand out.",
      image: cotton,
      link: "#",
    },
    {
      title: "Content Marketing",
      description:
        "Blogs, videos, and infographics will be tailored to local audiences",
      image: shooting,
      link: "#",
    },
    {
      title: "Ask Engine Optimization",
      description:
        "Nextlevity will create Personalized campaigns will boost customer retention.",
      image: divide,
      link: "#",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Nextlevity will provide data-driven insights to optimize campaigns...",
      image: star,
      link: "#",
    },
  ];
  return (
    <>
      <VStack className="md:-mt-32 -mt-20 w-full relative">
        <Image
          className="object-cover w-full"
          src={serviceOne}
          alt="Hero Image"
          width={3200}
          height={3000}
        />
        <VStack className="absolute inset-0 bg-[#FFFFFF80] w-full justify-center items-center">
          <VStack className="md:gap-28 mt-8 md:mt-auto md:px-36 px-4 justify-center items-center">
            <VStack className="gap-4 justify-center items-center">
              <Heading size="md" className="text-4xl">
                Our Services
              </Heading>
              <Text size="md" className="font-semibold text-lg text-center">
                Build Your Dream Business with Our Expert Marketing Solutions
              </Text>
            </VStack>
            {/** Desktop View */}
            <HStack className="hidden md:flex flex-wrap items-center justify-center gap-6">
              {services.map((service, index) => (
                <Link href={service.link} key={index}>
                  <Card className="gap-2 w-60 h-48 items-center justify-center">
                    <Image
                      className="object-cover"
                      src={service.image}
                      alt="Hero Image"
                      width={70}
                      height={70}
                    />
                    <Heading size="xs" className="">
                      {service.title}
                    </Heading>
                    <Text size="xs" className="text-center">
                      {service.description}
                    </Text>
                  </Card>
                </Link>
              ))}
            </HStack>

          </VStack>
        </VStack>
      </VStack>
                  {/* Mobile View */}

      <VStack className="md:hidden w-full -mt-10">
        <Swiper
          className="md:hidden h-full w-[22rem]"
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link href={service.link}>
                <Card variant="filled" className="gap-2 w-44 h-44 items-center justify-center">
                  <Image
                    className="object-cover"
                    src={service.image}
                    alt="Hero Image"
                    width={50}
                    height={50}
                  />
                  <Heading size="xs" className="text-center">
                    {service.title}
                  </Heading>
                  <Text size="xs" className="text-center">
                    {service.description}
                  </Text>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </VStack>
    </>
  );
};

export default Header;
