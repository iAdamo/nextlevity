import {
  HStack,
  Text,
  VStack,
  Button,
  ButtonIcon,
  Icon,
} from "@/components/ui";
import Image from "next/image";
import {
  facebook,
  instagram,
  linkedin,
  tiktok,
  twitter,
  youtube,
} from "@/public/assets/icons";

const Footer = () => {
  return (
    <VStack className="md:mx-10 mx-6 md:flex-row md:justify-between gap-2 border-t border-gray-300">
      <VStack className="md:flex-row justify-center items-center md:gap-6">
        <Text className="text-xl md:text-2xl font-extrabold">NEXTLEVITY</Text>
        <Text className="text-xs">
          &copy; 2025 Nextlevity. All Rights Reserved.
        </Text>
      </VStack>
      <VStack className="md:flex-row gap-12">
        <HStack className="justify-center items-center gap-6">
          <Image src={facebook} alt="Facebook" className="w-6 h-6" />
          <Image src={instagram} alt="Instagram" className="w-6 h-6" />
          <Image src={linkedin} alt="Linkedin" className="w-6 h-6" />
          <Image src={tiktok} alt="Tiktok" className="w-6 h-6" />
          <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          <Image src={youtube} alt="Youtube" className="w-6 h-6" />
        </HStack>
        <VStack className="justify-center items-end pt-4 gap-1">
          <Text className="font-bold text-sm md:text-sm">
            +234-913-9290-549
          </Text>

          <Text className="font-bold text-sm md:text-sm">
            Block 10011, Mary Avenue, London
          </Text>
          <Text className="font-bold text-sm md:text-sm">
            NO 54 Landi Street, MaryLand, Lagos
          </Text>
        </VStack>
        <HStack className="hidden justify-center items-center gap-2">
          <Text className="font-bold text-sm md:text-sm">Block</Text>
          <Text className="font-bold text-sm md:text-sm">Block</Text>
          <Text className="font-bold text-sm md:text-sm">Privacy Policy</Text>
          <Text className="font-bold text-sm md:text-sm">Terms of Service</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
