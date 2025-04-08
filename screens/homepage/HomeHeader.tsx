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
    <VStack className="-mt-40 w-full relative h-[60rem] overflow-hidden">
      <VStack className="absolute inset-0 w-full h-[56rem] bg-gradient-to-r from-white to-purple-100">
        <Image
          className="object-contain w-full h-[60rem]"
          src={spirals}
          alt="spirals"
          width={1000}
          height={1000}
        />
        <HStack className="absolute bottom-[4rem] h-[42rem] -right-28">
          <Image
            className="object-cover"
            src={header}
            alt="home header"
            width={1000}
            height={1000}
          />
        </HStack>
        <HStack className="absolute top-[40rem] left-[40rem]">
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
            <Text className="text-text-primary pr-40">
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
