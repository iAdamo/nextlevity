import { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { FormControl } from "@/components/ui/form-control";

const Newsletter = () => {
  const [values, setValues] = useState("");

  const handleSubmit = () => {
    console.log(values);
    setValues("");
  };

  return (
    <VStack className="py-20 px-20  drop-shadow-xl">
      <HStack className="bg-[#77777733] p-10 rounded-3xl shadow-bottom-right">
        <VStack className="w-2/3 gap-4">
          <Heading size="2xl">Join Our Weekly Newsletter</Heading>
          <Text className="font-semibold">
            Stay informed with the latest news, announcements, and articles
            <br />
            designed to elevate your brand.
          </Text>
        </VStack>
        <VStack className="w-1/4 justify-center items-center">
          <FormControl>
            <Input className="bg-[#FFFEFE] h-14 rounded-lg border-none px-2 data-[focus=true]:bg-transparent">
              <InputField
                placeholder="Enter your email address"
                value={values}
                onChangeText={(text) => setValues(text)}
              />
              <Button
                onPress={handleSubmit}
                className="bg-brand-4 rounded-xl py-2"
              >
                <ButtonText>Subscribe</ButtonText>
              </Button>
            </Input>
          </FormControl>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Newsletter;
