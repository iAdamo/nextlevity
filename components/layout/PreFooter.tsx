"use client";

import { useState } from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import Link from "next/link";
import Image from "next/image";
import { facebook, instagram, linkedin, youtube } from "@/public/assets/icons";

const PreFooter = () => {
  const cardData = [
    {
      icon: "/assets/icons/bulbidea.svg",
      alt: "Bulb Idea Icon",
      title: "Innovation",
      description:
        "The driving force behind progress and growth, fostering new ideas and solutions. It propels us forward!",
    },
    {
      icon: "/assets/icons/heart.svg",
      alt: "Heart Icon",
      title: "Excellence",
      description:
        "Our pursuit of the highest standards in all endeavors, driving continuous improvement and outstanding performance.",
    },
    {
      icon: "/assets/icons/boyball.svg",
      alt: "Boyball Icon",
      title: "Transparency",
      description:
        "The pursuit of the highest standards in all endeavors, driving continuous improvement and outstanding performance.",
    },
  ];
  const info = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Faqs", href: "/#faqs" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Digital Marketing ", href: "/services/brand-strategy" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Pay-Per-Click Advertising", href: "/services/seo-sem" },
        { name: "Social Media Management", href: "/services/social-media" },
        { name: "Email Marketing", href: "/services/email-marketing" },
        {
          name: "Influencer Marketing",
          href: "/services/influencer-marketing",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Our Team", href: "/about#team" },
        { name: "Contact Us", href: "/contact#form" },
        { name: "FAQS", href: "/#faqs" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Contact Us", href: "/contact#form" },
        { name: "Terms of service", href: "/privacy-policy" },
      ],
    },
  ];
  const socialMediaIcons = [
    { src: facebook, alt: "Facebook Icon" },
    { src: youtube, alt: "Youtube Icon" },
    { src: instagram, alt: "Instagram Icon" },
    { src: linkedin, alt: "Linkedin Icon" },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <VStack className="bg-brand-1 md:mt-20 mt-10 relative overflow-hidden">
      <VStack className="w-full items-end -pb-10">
        <Card className="bg-brand-0 md:w-60 md:h-60 w-32 h-32 rounded-bl-full"></Card>
      </VStack>
      <Card className="bg-[#D9D9D91F] absolute w-52 h-52 rounded-full top-[23rem] left-[65rem]"></Card>
      <VStack className="md:px-28 px-4 ">
        <VStack className="bottom-20">
          <Heading size="sm" className="text-white md:text-3xl">
            The values that hold us accountable <br />
            and guide our actions.
          </Heading>
        </VStack>

        {/**cards */}

        <VStack className="md:flex-row justify-between md:gap-28">
          {cardData.map((card, index) => (
            <Card
              key={index}
              variant="outline"
              className="justify-start md:gap-4 gap-2 border-0 "
            >
              <HStack className="justify-start gap-2 md:pl-2">
                <Image src={card.icon} alt={card.alt} width={24} height={24} />
                <Heading size="md" className="text-white md:text-xl font-bold">
                  {card.title}
                </Heading>
              </HStack>
              <Text
                size="sm"
                className="text-white md:text-lg font-semibold md:ml-0 ml-8"
              >
                {card.description}
              </Text>
            </Card>
          ))}
        </VStack>
        {/**---------- */}
        <VStack className="md:flex-row mt-2 justify-between gap-4 md:m-10 md:p-10 p-4 bg-[#FFFFFF4D] rounded-xl">
          <VStack className="items-start">
            <Heading size="sm" className="text-white md:text-3xl leading-8">
              Ready to enhance your digital footprint?
              <br />
              <span className="text-black">Let&apos;s get started!</span>
            </Heading>
          </VStack>
          <VStack className="items-center justify-center">
            <Link
              href="/contact#form"
              className="bg-white rounded-3xl hover:bg-brand-1 active:bg-brand-0 text-brand-0 font-bold py-2 px-6 text-center no-underline"
            >
              Get in touch
            </Link>
          </VStack>
        </VStack>

        <HStack className="border-b-4 mt-4">
          <HStack className="md:hidden w-2/5 my-4 flex-wrap justify-betwee">
            {info.map((item, index) => (
              <VStack
                key={item.title}
                className="md:flex-col gap-2 w-full md:w-auto"
              >
                <Pressable onPress={() => toggleDropdown(index)}>
                  <HStack className="justify-between py-2">
                    <Heading size="sm" className="text-white">
                      {item.title}
                    </Heading>
                    <Icon
                      as={openIndex === index ? ChevronUpIcon : ChevronDownIcon}
                      size="lg"
                      color="white"
                    />
                  </HStack>
                </Pressable>

                {openIndex === index &&
                  item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-md pl-8 no-underline text-white hover:underline hover:text-brand-0"
                    >
                      {link.name}
                    </Link>
                  ))}
              </VStack>
            ))}
          </HStack>
          <HStack className="hidden md:flex w-2/3 p-4 flex-wrap justify-between">
            {info.map((item) => (
              <VStack key={item.title} className="md:flex-col gap-2">
                <Heading size="md" className="my-6 text-[#F4F4F4]">
                  {item.title}
                </Heading>
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="no-underline font-medium text-[#F4F4F4] data-[hover=true]:underline data-[hover=true]:text-primary-100"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            ))}
          </HStack>
          <VStack className="md:ml-40 md:w-auto w-3/5 items-center justify-start md:justify-center">
            <Heading size="sm" className="text-white md:text-xl">
              Follow Us
            </Heading>
            <HStack className="items-center gap-4">
              {socialMediaIcons.map((icon, index) => (
                <Card
                  key={index}
                  variant="outline"
                  className="md:w-10 w-6 md:h-10 h-6 p-0 rounded-full flex items-center justify-center"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="md:w-8 w-4 md:h-8 h-4 "
                  />
                </Card>
              ))}
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PreFooter;
