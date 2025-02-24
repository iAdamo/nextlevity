import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import {
  Button,
  ButtonText,
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
    <VStack id="form" className="px-20 py-10">
      <HStack>
        <VStack className="w-1/2 gap-8">
          <VStack className="pr-20 pl-10 gap-6">
            <HStack className="justify-between">
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText className="font-bold">First name</FormControlLabelText>
                </FormControlLabel>
                <Input className="h-12 border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50">
                  <InputField className="" placeholder="First Name" />
                </Input>
                <FormControlError>
                  <FormControlErrorText></FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText className="font-bold">Last name</FormControlLabelText>
                </FormControlLabel>
                <Input className="h-12 border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50">
                  <InputField className="" placeholder="Last Name" />
                </Input>
              </FormControl>
            </HStack>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="font-bold">Email</FormControlLabelText>
              </FormControlLabel>
              <Input className="h-12 border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50">
                <InputField
                  className=""
                  placeholder="adeola.musa.chuks@gmail.com"
                />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="font-bold">Phone Number</FormControlLabelText>
              </FormControlLabel>

              <Input className="h-12 border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50">
                <Select className="w-1/4">
                  <SelectTrigger className="h-12 justify-between border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50">
                    <SelectInput placeholder="NG" className="flex-1 font-semibold" />
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
                      <SelectItem label="Pink" value="pink"/>
                      <SelectItem label="Green" value="green" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
                <InputField className="" placeholder="+(234) 900 0000 000" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="font-bold">Message</FormControlLabelText>
              </FormControlLabel>
              <Textarea
                size="sm"
                className="h-40 border-brand-4 data-[hover=true]:border-brand-4 data-[hover=true]:border-2 data-[focus=true]:border-brand-4 data-[focus=true]:bg-blue-50"
              >
                <TextareaInput
                  placeholder="Leave a message for us..."
                  className="text-left align-top "
                />
              </Textarea>
            </FormControl>
          </VStack>
          <VStack className="ml-10">
            <FormControl className="flex flex-row gap-4 flex-wrap">
              <Checkbox value="Social Media Marketing" className="gap-4">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="" />
                </CheckboxIndicator>
                <CheckboxLabel className="">
                  Social Media Marketing
                </CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Branding and graphics design">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel className="">
                  Branding and graphics design
                </CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Content Marketing">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="" />
                </CheckboxIndicator>
                <CheckboxLabel className="">Content Marketing</CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Influencer Marketing">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="" />
                </CheckboxIndicator>
                <CheckboxLabel className="">Influencer Marketing</CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Search Engine Optimization">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="text-2xl" />
                </CheckboxIndicator>
                <CheckboxLabel className="">
                  Search Engine Optimization
                </CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Pay per Click Advertising">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="" />
                </CheckboxIndicator>
                <CheckboxLabel className="">
                  Pay per Click Advertising
                </CheckboxLabel>
              </Checkbox>
              <Checkbox className="gap-4" value="Others">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} className="" />
                </CheckboxIndicator>
                <CheckboxLabel className="">Others </CheckboxLabel>
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
