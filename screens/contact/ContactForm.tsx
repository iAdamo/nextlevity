import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from "@/components/ui/button";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon, ChevronDownIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { message, sentarrow, twitter, phone } from "@/public/assets/icons";


const ContactForm = () => {
  return (
    <VStack className="px-20 py-10">
      <HStack>
        <VStack className="w-1/2 gap-8">
          <VStack className="pr-20 gap-8">
            <HStack className="justify-between">
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText>First name</FormControlLabelText>
                </FormControlLabel>
                <Input className="h-12">
                  <InputField className="" />
                </Input>
                <FormControlError>
                  <FormControlErrorText></FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText>Last name</FormControlLabelText>
                </FormControlLabel>
                <Input className="h-12">
                  <InputField className="h-20" />
                </Input>
              </FormControl>
            </HStack>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Input className="h-12">
                <InputField className="h-20" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Phone number</FormControlLabelText>
              </FormControlLabel>
              <HStack className="border">
                <Select className="h-14 w-1/4 border-0">
                  <SelectTrigger>
                    <SelectInput
                      placeholder="Select option"
                      className="flex-1"
                    />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Red" value="red" />
                      <SelectItem label="Blue" value="blue" />
                      <SelectItem label="Black" value="black" />
                      <SelectItem label="Pink" value="pink" isDisabled={true} />
                      <SelectItem label="Green" value="green" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
                <Input className="h-12 w-3/4 border-0">
                  <InputField className="h-20" />
                </Input>
              </HStack>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Message</FormControlLabelText>
              </FormControlLabel>
              <Textarea size="sm" className="h-40 bg-blue-50">
                <TextareaInput
                  placeholder="Leave a message for us..."
                  className="text-left align-top "
                />
              </Textarea>
            </FormControl>
          </VStack>
          <VStack className="">
            <FormControl className="flex flex-row gap-4 flex-wrap">
              <Checkbox className="gap-4">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Social Media Marketing
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Branding and graphics design
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Content Marketing
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Influencer Marketing
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Search Engine Optimization
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">
                  Pay per Click Advertising
                </CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="text-xl">Others </CheckboxLabel>
              </Checkbox>
            </FormControl>
          </VStack>
          <Button className="rounded-2xl ml-32 w-60 h-12 bg-brand-0 hover:bg-brand-1">
            <ButtonText>Send Message</ButtonText>
          </Button>
        </VStack>
        <VStack className="pl-20 gap-10 w-1/2">
          <VStack className="gap-4">
            <Heading size="2xl">Chat with us</Heading>
            <Text>Speak to our friendly team via live chat </Text>
            <Button variant="link" className="justify-start gap-4">
              <Image src={message} alt="Message" width={24} height={24} />
              <ButtonText>Start a live chat</ButtonText>
            </Button>
            <Button variant="link" className="justify-start gap-4">
              <Image src={sentarrow} alt="sentarrow" width={24} height={24} />
              <ButtonText>Shoot us an email</ButtonText>
            </Button>
            <Button variant="link" className="justify-start gap-4">
              <Image src={twitter} alt="Socials" width={24} height={24} />
              <ButtonText>Check out socials</ButtonText>
            </Button>
          </VStack>
          <VStack className="gap-4">
            <Heading className="2xl">Call Us</Heading>
            <Text>Call our team from Mon- Fri from 8am to 5pm</Text>
            <Button variant="link" className="justify-start gap-4">
              <Image src={phone} alt="phone" width={24} height={24} />
              <ButtonText>+234 913 929 0549</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ContactForm;
