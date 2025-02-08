import Image from "next/image";
import { spirals, chart } from "@/public/assets/icons";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link, LinkText } from "@/components/ui/link";

const HomeHeader = () => {
  return (
    <VStack className="-mt-32 w-full relative bg-transparent">
      <VStack className="justify-center bg-transparent">
        <Image
          className="object-cover w-full"
          src={spirals}
          alt="Hero Image"
          width={900}
          height={900}
        />
      </VStack>
      <VStack className="absolute top-0 w-full h-[55rem] bg-red-600 bg-opacity-10">
        <HStack className="absolute bottom-[5rem] right-0">
          <Image
            className="object-cover"
            src="/assets/homepage/header.png"
            alt="Hero Image"
            width={900}
            height={900}
          />
        </HStack>
        <HStack className="absolute top-[38rem] left-[40rem]">
          <Image
            className="object-cover"
            src={chart}
            alt="Hero Image"
            width={150}
            height={150}
          />
        </HStack>

        <HStack className="w-full md:pl-20 absolute bottom-72 items-center">
          <VStack className="w-1/2 h-full px-6 py-8 md:p-0 md:py-0 justify-center gap-8">
            <VStack>
              <Text className="md:text-5xl text-xl font-extrabold text-txt-0">
                Your Vision,
              </Text>
              <Text className="md:text-5xl text-xl font-extrabold text-txt-0">
                Our Strategy,
              </Text>
              <Link className="inline space-x-2 md:text-5xl text-xl font-extrabold text-txt-0">
                <Text className="md:text-5xl text-xl font-extrabold text-txt-0">
                  Unmatched
                </Text>
                <LinkText className="text-brand-1 md:text-5xl text-xl font-extrabold">
                  Results
                </LinkText>
              </Link>
            </VStack>
            <Text className="text-text-primary">
              At Nextlevity, we specialize in turning your vision into reality.
              Our innovative strategies and creative solutions ensure your brand
              stands out in the digital landscape
            </Text>
            <Button
              variant="outline"
              className="w-40 h-12 mt-8 ml-10 rounded-xl border-0 bg-brand-0 data-[hover=true]:bg-brand-1 data-[active=true]:bg-brand-0"
            >
              <ButtonText className="text-txt-0">Get in touch</ButtonText>
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default HomeHeader;
