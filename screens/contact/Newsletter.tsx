import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <VStack className="py-20 px-20  drop-shadow-xl">
      <HStack className="bg-[#77777733] p-10 rounded-3xl shadow-bottom-right">
        <VStack className="w-2/3 gap-4">
          <Heading size="xl">Join Our Weekly Newsletter</Heading>
          <Text>
            Stay informed with the latest news, announcements, and articles
            <br />
            designed to elevate your brand.
          </Text>
        </VStack>
        <VStack className="w-1/4 justify-center items-center">
          <Input className="bg-[#FFFEFE] h-14 rounded-lg border-none px-2">
            <InputField placeholder="Enter your email address" />
            <Button className="bg-brand-4 rounded-xl py-2">
              <ButtonText>Subscribe</ButtonText>
            </Button>
          </Input>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Newsletter;
