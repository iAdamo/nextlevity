import { useState } from "react";
import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
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
    <VStack className="md:py-20 py-10 md:px-20 px-4 drop-shadow-xl">
      <VStack className="md:flex-row bg-[#77777733] md:p-10 p-4 gap-2 md:gap-0 rounded-3xl shadow-bottom-right">
        <VStack className="md:w-2/3 md:gap-4 gap-2">
          <Heading size="lg" className="md:text-3xl">
            Join Our Weekly Newsletter
          </Heading>
          <Text size="sm" className="md:text-xl md:font-semibold">
            Stay informed with the latest news, announcements, and articles{" "}
            <br className="hidden md:inline" />
            designed to elevate your brand.
          </Text>
        </VStack>
        <VStack className="md:w-1/4 justify-center items-center ">
          <FormControl className="w-full">
            <Input className="bg-[#FFFEFE] w-full md:h-14 h-12 rounded-lg border-none px-2 data-[focus=true]:bg-transparent">
              <InputField
                placeholder="Enter your email address"
                className="placeholder:text-sm w-full font-normal placeholder:text-typography-400"
                value={values}
                onChangeText={(text) => setValues(text)}
              />
              <Button
                onPress={handleSubmit}
                className="hidden md:flex bg-brand-4 rounded-xl py-2"
              >
                <ButtonText>Subscribe</ButtonText>
              </Button>
              <Button
                size="sm"
                onPress={handleSubmit}
                className="md:hidden bg-brand-4 rounded-xl py-2"
              >
                <ButtonText>Subscribe</ButtonText>
              </Button>
            </Input>
          </FormControl>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Newsletter;
