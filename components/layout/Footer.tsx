"use client";

import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

const Footer = () => {
  return (
    <HStack className="bg-brand-1 py-4 justify-center items-center">
      <Text className="text-[#F2FFFE]">&copy; Nextlevity 2025</Text>
    </HStack>
  );
};

export default Footer;
