import { useState } from "react";
import {
  HStack,
  VStack,
  Link,
  LinkText,
  Pressable,
  Heading,
  Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  Card,
  Text,
  Button,
  ButtonText,
} from "@/components/ui";
import Image from "next/image";
import {
  facebook,
  instagram,
  linkedin,
  youtube,
} from "@/public/assets/icons";

const PreFooter = () => {
  const info = [
    {
      title: "Marketing Solutions",
      links: [
        { name: "Brand Strategy", href: "/services/brand-strategy" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Social Media Marketing", href: "/services/social-media" },
        { name: "SEO & SEM", href: "/services/seo-sem" },
        { name: "Email Marketing", href: "/services/email-marketing" },
        {
          name: "Influencer Marketing",
          href: "/services/influencer-marketing",
        },
      ],
    },
    {
      title: "Industries We Serve",
      links: [
        { name: "E-Commerce", href: "/industries/e-commerce" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Tech Startups", href: "/industries/tech-startups" },
        { name: "Education", href: "/industries/education" },
        { name: "Hospitality", href: "/industries/hospitality" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars & Events", href: "/resources/webinars" },
        { name: "Marketing Guides", href: "/resources/marketing-guides" },
        { name: "Tools & Templates", href: "/resources/tools-templates" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <VStack className="bg-brand-1 mt-20 relative">
      <VStack className="w-full items-end -pb-10">
        <Card className="bg-brand-0 w-52 h-52 rounded-bl-full"></Card>
      </VStack>
      <Card className="bg-[#D9D9D91F] absolute w-52 h-52 rounded-full top-[23rem] left-[65rem]"></Card>
      <VStack className="px-28 w-full">
        <VStack className="bottom-20">
          <Heading size="2xl" className="text-white">
            The values that hold us accountable
          </Heading>
          <Heading size="2xl" className="text-white">
            and guide our actions.
          </Heading>
        </VStack>

        {/**cards */}
        <HStack className="justify-between gap-28">
          <Card variant="outline" className="justify-start gap-4 border-0">
            <HStack className="justify-start gap-2 pl-2">
              <Image
                src="/assets/icons/bulbidea.svg"
                alt="Boyball Icon"
                width={24}
                height={24}
              />
              <Heading className="text-white font-bold">Innovation</Heading>
            </HStack>

            <Text className="text-white font-semibold">
              The driving force behind progress and growth, fostering new ideas
              and solutions. It propels us forward!
            </Text>
          </Card>
          <Card variant="outline" className="justify-start gap-4 border-0">
            <HStack className="justify-start gap-2 pl-2">
              <Image
                src="/assets/icons/heart.svg"
                alt="Heart Icon"
                width={24}
                height={24}
              />
              <Heading className="text-white font-bold">Excellence</Heading>
            </HStack>

            <Text className="text-white font-semibold">
              Our pursuit of the highest standards in all endeavors, driving
              continuous improvement and outstanding performance.
            </Text>
          </Card>
          <Card variant="outline" className="justify-start gap-4 border-0">
            <HStack className="justify-start gap-2 pl-2">
              <Image
                src="/assets/icons/boyball.svg"
                alt="Boyball Icon"
                width={24}
                height={24}
              />
              <Heading className="text-white font-bold">Transparency</Heading>
            </HStack>

            <Text className="text-white font-semibold">
              The pursuit of the highest standards in all endeavors, driving
              continuous improvement and outstanding performance.
            </Text>
          </Card>
        </HStack>
        {/**---------- */}
        <HStack className="justify-between m-10 p-10 bg-[#FFFFFF4D] rounded-xl">
          <VStack className="items-start gap-4">
            <Heading size="2xl" className="text-white">
              Ready to enhance your digital footprint?
            </Heading>
            <Heading size="2xl">Let&apos;s get started!</Heading>
          </VStack>
          <VStack className="items-center justify-center">
            <Button variant="outline" className="border-0 bg-white rounded-3xl">
              <ButtonText className="text-brand-0">Get in touch</ButtonText>
            </Button>
          </VStack>
        </HStack>

        <HStack className="border-b-4 mt-8">
          <HStack className="md:hidden p-4 my-4 flex-wrap justify-between">
            {info.map((item, index) => (
              <VStack
                key={item.title}
                className="md:flex-col gap-2 w-full md:w-auto"
              >
                <Pressable onPress={() => toggleDropdown(index)}>
                  <HStack className="justify-between py-2">
                    <Heading size="sm" className="">
                      {item.title}
                    </Heading>
                    <Icon
                      as={openIndex === index ? ChevronUpIcon : ChevronDownIcon}
                      size="lg"
                      color="gray"
                    />
                  </HStack>
                </Pressable>

                {openIndex === index &&
                  item.links.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <LinkText className="no-underline text-primary-100 data-[hover=true]:underline data-[hover=true]:text-primary-100">
                        {link.name}
                      </LinkText>
                    </Link>
                  ))}
              </VStack>
            ))}
          </HStack>
          <HStack className="hidden md:flex w-2/3 p-4 my-4 flex-wrap justify-between">
            {info.map((item) => (
              <VStack key={item.title} className="md:flex-col gap-2">
                <Heading size="md" className="my-6 text-[#F4F4F4]">
                  {item.title}
                </Heading>
                {item.links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <LinkText className="no-underline font-medium text-[#F4F4F4] data-[hover=true]:underline data-[hover=true]:text-primary-100">
                      {link.name}
                    </LinkText>
                  </Link>
                ))}
              </VStack>
            ))}
          </HStack>
          <VStack className="ml-40 items-center justify-center">
            <Heading className="text-white">Follow Us</Heading>
            <HStack className="items-center gap-4">
              <Card
                variant="outline"
                className="w-10 h-10 p-0 rounded-full flex items-center justify-center"
              >
                <Image
                  src={facebook}
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                />
              </Card>
              <Card
                variant="outline"
                className="w-10 h-10 p-0 rounded-full flex items-center justify-center"
              >
                <Image
                  src={youtube}
                  alt="Youtube Icon"
                  width={24}
                  height={24}
                />
              </Card>
              <Card
                variant="outline"
                className="w-10 h-10 p-0 rounded-full flex items-center justify-center"
              >
                <Image
                  src={instagram}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                />
              </Card>
              <Card
                variant="outline"
                className="w-10 h-10 p-0 rounded-full flex items-center justify-center"
              >
                <Image
                  src={linkedin}
                  alt="Linkedin Icon"
                  width={24}
                  height={24}
                />
              </Card>

            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PreFooter;
