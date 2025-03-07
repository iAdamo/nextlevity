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

const Header = () => {
  const services = [
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: bolt,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: loading,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: loader,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: metrize,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: cotton,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: shooting,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: divide,
      link: "#",
    },
    {
      title: "Branding and graphics design",
      description:
        "Nextlevity help businesses rank higher on search engines for increased visibility ",
      image: star,
      link: "#",
    },
  ];
  return (
    <VStack className="-mt-32 w-full relative">
      <Image
        className="object-cover w-full"
        src={serviceOne}
        alt="Hero Image"
        width={3200}
        height={3000}
      />
      <VStack className="absolute inset-0 bg-[#FFFFFF80] w-full justify-center items-center">
        <VStack className="gap-28 px-36 justify-center items-center">
          <VStack className="gap-4 justify-center items-center">
            <Heading size="3xl">Our Services</Heading>
            <Text className="font-semibold">
              Build Your Dream Business with Our Expert Marketing Solutions
            </Text>
          </VStack>

          <HStack className="flex-wrap items-center justify-center gap-6">
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
  );
};

export default Header;
