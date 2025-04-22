import Image from "next/image";
import { spirals, chart } from "@/public/assets/icons";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { header } from "@/public/assets/homepage";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <VStack className="md:-mt-40 -mt-28 w-full bg-gradient-to-br from-white via-white to-purple-200 relative overflow-hidden">
      <Image
        className="object-cover w-full mt-10 md:h-auto h-96"
        src={spirals}
        alt="spirals"
        width={1900}
        height={1900}
      />

      <VStack className="absolute inset-0 w-full">
        <HStack className="md:top-16 top-[8.3rem] md:left-96 left-14">
          <Image
            className="object-cover"
            src={header}
            alt="home header"
            width={1150}
            height={1150}
          />
        </HStack>
        <VStack className="absolute w-full h-full md:top-[50rem] top-[23rem] md:left-[41rem] left-36">
          <Image
            className="object-cover md:w-36 md:h-36 w-10 h-10"
            src={chart}
            alt="chart"
            width={150}
            height={150}
          />
        </VStack>

        <HStack className="w-full md:pl-20 absolute md:bottom-56 items-center">
          <VStack className="md:w-1/2 h-full px-6 py-28 md:p-0 md:py-0 justify-center md:gap-10 gap-4">
            <VStack space="sm" className="md:gap-4 gap-2">
              <Text className="md:text-5xl text-center md:text-start text-xl font-extrabold text-txt-0">
                Your Vision,
              </Text>
              <Text className="md:text-5xl text-xl font-extrabold text-txt-0 text-center md:text-start inline md:leading-normal">
                Our Strategy,{" "}
                <span className="md:block inline">
                  Unmatched{" "}
                  <Link
                    href="/services"
                    className="inline md:text-5xl text-xl font-extrabold text-brand-1 hover:underline"
                  >
                    Results
                  </Link>
                </span>
              </Text>
            </VStack>
            <Text
              size="sm"
              className="text-center md:text-start md:text-lg text-text-primary md:pr-40 md:leading-8"
            >
              At Nextlevity, we specialize in turning your vision into reality.
              Our innovative strategies and creative solutions ensure your brand
              stands out in the digital landscape
            </Text>
            <Button
              variant="outline"
              className="md:w-40 w-32 md:h-12 h-8 md:mt-8 md:ml-10 mx-auto rounded-full border-0 bg-brand-0 data-[hover=true]:bg-brand-1 data-[active=true]:bg-brand-0"
            >
              <ButtonText className="text-txt-0 md:text-xl text-sm">
                Get in touch
              </ButtonText>
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default HomeHeader;
