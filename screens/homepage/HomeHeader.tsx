import Image from "next/image";
import { spirals, chart } from "@/public/assets/icons";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link, LinkText } from "@/components/ui/link";
import { header } from "@/public/assets/homepage";

const HomeHeader = () => {
  return (
    <VStack className="-mt-40 w-full bg-gradient-to-br from-white via-white to-purple-200 relative overflow-hidden">
      <Image
        className="object-cover w-full mt-10"
        src={spirals}
        alt="spirals"
        width={1900}
        height={1900}
      />

      <VStack className="absolute inset-0 w-full">
        <HStack className="top-16 left-[24rem]">
          <Image
            className="object-cover"
            src={header}
            alt="home header"
            width={1150}
            height={1150}
          />
        </HStack>
        <HStack className="absolute top-[50rem] left-[41rem]">
          <Image
            className="chart"
            src={chart}
            alt="Hero Image"
            width={150}
            height={150}
          />
        </HStack>

        <HStack className="w-full md:pl-20 absolute bottom-56 items-center">
          <VStack className="w-1/2 h-full px-6 py-8 md:p-0 md:py-0 justify-center gap-10">
            <VStack space="lg" className="">
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
            <Text className="text-text-primary pr-40 leading-8">
              At Nextlevity, we specialize in turning your vision into reality.
              Our innovative strategies and creative solutions ensure your brand
              stands out in the digital landscape
            </Text>
            <Button
              variant="outline"
              className="w-40 h-12 mt-8 ml-10 rounded-full border-0 bg-brand-0 data-[hover=true]:bg-brand-1 data-[active=true]:bg-brand-0"
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
