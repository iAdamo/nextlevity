import {
  HStack,
  VStack,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
  Button,
  ButtonText,
  Divider,
} from "@/components/ui";
import { MinusIcon, PlusIcon } from "lucide-react-native";

const FaqSection = () => {
  const faqsData = [
    {
      question: "What services does Nextlevity offer?",
      answer:
        "Nextlevity provides a full range of marketing services, including brand strategy, content marketing, SEO, social media management, graphic design, web development, and more. Explore our Services page for a complete list.",
    },
    {
      question: "How do I get started with Nextlevity?",
      answer:
        "Getting started is easy! Simply visit our 'Contact Us' page or schedule a free consultation. Our team will reach out to understand your goals and customize a marketing strategy for your business.",
    },
    {
      question: "Do you offer custom marketing packages?",
      answer:
        "Yes, we specialize in creating tailored marketing packages based on your business needs, industry, and goals. Contact us to discuss your specific requirements and we'll create a personalized plan.",
    },
    {
      question: "Can Nextlevity handle both online and offline marketing?",
      answer:
        "Absolutely! We specialize in both digital campaigns like SEO, social media, and PPC ads, as well as offline strategies such as print marketing, event promotions, and branding collateral.",
    },
    {
      question: "What industries does Nextlevity work with?",
      answer:
        "We serve a wide range of industries including e-commerce, healthcare, real estate, education, hospitality, and tech startups. No matter your industry, we have strategies that can help you grow.",
    },
    {
      question: "How does Nextlevity measure campaign success?",
      answer:
        "We use data-driven metrics to measure campaign success, including engagement rates, lead generation, conversion rates, and ROI. Our team provides detailed reports to keep you informed on campaign performance.",
    },
    {
      question: "What makes Nextlevity different from other agencies?",
      answer:
        "Nextlevity stands out through our results-driven approach, creative expertise, and commitment to personalized service. We treat each client like a partner, focusing on long-term growth and impactful strategies.",
    },
    {
      question: "How can I track the progress of my project?",
      answer:
        "Clients have access to our exclusive Client Portal where you can monitor project progress, view reports, and collaborate with our team in real-time.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "Client satisfaction is our priority. If you're not satisfied, we'll work closely with you to adjust strategies and ensure we meet your expectations with continuous optimization.",
    },
  ];

  return (
    <HStack className="justify-between rounded-2xl m-20">
      <VStack className="justify-start pr-20 gap-4">
        <Heading size="4xl">Frequently</Heading>
        <Heading size="4xl">Asked Questions</Heading>
        <Text>
          &quot;Whether you&apos;re just starting with digital marketing or
          looking to explore our services further, these FAQs are here to give
          you clear and concise answers&quot;
        </Text>
        <Button className="bg-brand-0 w-52 p-6 m-10 rounded-2xl">
          <ButtonText>See more FAQS</ButtonText>
        </Button>
      </VStack>
      <Accordion variant="unfilled" type="multiple" className="w-1/2">
        {faqsData.map((faq, index) => (
          <>
            <AccordionItem key={index} value={String(index)} className="mb-4">
              <AccordionHeader>
                <AccordionTrigger className="gap-4">
                  {({ isExpanded }) => {
                    return (
                      <>
                        {isExpanded ? (
                          <AccordionIcon
                            as={MinusIcon}
                            className="text-brand-0 font-bold"
                          />
                        ) : (
                          <AccordionIcon
                            as={PlusIcon}
                            className="text-brand-0 font-bold"
                          />
                        )}
                        <AccordionTitleText>{faq.question}</AccordionTitleText>
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="ml-10">
                <AccordionContentText>{faq.answer}</AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider />
          </>
        ))}
      </Accordion>
    </HStack>
  );
};

export default FaqSection;
