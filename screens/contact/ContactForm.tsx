import React from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import {
  CheckboxGroup,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { message, sentarrow, twitter, phone } from "@/public/assets/icons";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <VStack id="form" className="px-20 py-10">
      <HStack>
        <VStack className="w-1/2 gap-8">
          <VStack className="pr-20 pl-10 gap-6">
            <HStack className="justify-between">
              <FormControl isInvalid={!!errors.firstName}>
                <FormControlLabel>
                  <FormControlLabelText className="font-bold">
                    First Name
                  </FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <Input className="h-12 border-brand-4 focus:border-brand-4 focus:bg-blue-50">
                      <InputField placeholder="First Name" {...field} />
                    </Input>
                  )}
                />
                {errors.firstName && (
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.firstName.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.lastName}>
                <FormControlLabel>
                  <FormControlLabelText className="font-bold">
                    Last Name
                  </FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <Input className="h-12 border-brand-4 focus:border-brand-4 focus:bg-blue-50">
                      <InputField placeholder="Last Name" {...field} />
                    </Input>
                  )}
                />
                {errors.lastName && (
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.lastName.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
            </HStack>
            <FormControl isInvalid={!!errors.email}>
              <FormControlLabel>
                <FormControlLabelText className="font-bold">
                  Email
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Input className="h-12 border-brand-4 focus:border-brand-4 focus:bg-blue-50">
                    <InputField placeholder="example@email.com" {...field} />
                  </Input>
                )}
              />
              {errors.email && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.email.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.phone} className="z-50">
              <FormControlLabel>
                <FormControlLabelText className="font-bold">
                  Phone Number
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    country={"us"}
                    inputClass="!w-full !h-12 !border-brand-4 !focus:border-brand-4 !focus:bg-blue-50"
                    placeholder="+(234) 900 0000 000"
                    {...field}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
              {errors.phone && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.phone.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormControlLabel>
                <FormControlLabelText className="font-bold">
                  Message
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <Textarea
                    size="sm"
                    className="h-40 border-brand-4 focus:border-brand-4 focus:bg-blue-50"
                  >
                    <TextareaInput
                      placeholder="Leave a message for us..."
                      {...field}
                    />
                  </Textarea>
                )}
              />
              {errors.message && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.message.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </VStack>
          <VStack className="ml-10">
            <FormControl className="">
              <Controller
                name="services"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup
                    value={field.value}
                    onChange={(selectedValues) =>
                      field.onChange(selectedValues)
                    }
                    className="flex flex-row gap-4 flex-wrap"
                  >
                    {[
                      "Social Media Marketing",
                      "Branding and Graphics Design",
                      "Content Marketing",
                      "Influencer Marketing",
                      "Search Engine Optimization",
                      "Pay per Click Advertising",
                      "Others",
                    ].map((option) => (
                      <Checkbox key={option} value={option} className="gap-4">
                        <CheckboxIndicator>
                          <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel>{option}</CheckboxLabel>
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                )}
              />
            </FormControl>
          </VStack>
          <Button
            onPress={handleSubmit(onSubmit)}
            className="rounded-2xl ml-32 w-60 h-12 bg-brand-0 hover:bg-brand-1"
          >
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
