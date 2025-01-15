import { useState } from "react";
import {
  HStack,
  VStack,
  Heading,
  Card,
  Text,
  Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  Pressable,
} from "@/components/ui";

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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <VStack className="bg-purple-100 mx-4 p-6 mt-4 rounded-2xl">
      <HStack className="justify-center">
        <Heading size="xl">Frequently Asked Questions</Heading>
      </HStack>
      <HStack className="flex-wrap justify-start items-start p-6 mx-4 px-20 md:gap-4 gap-2 rounded-lg">
        {faqsData.map((faq, index) => (
          <Card key={index} variant="ghost" className="w-80">
            <Pressable onPress={() => toggleFaq(index)}>
              <HStack className="justify-between items-center">
                <Heading size="sm">{faq.question}</Heading>
                <Icon
                  as={openIndex === index ? ChevronUpIcon : ChevronDownIcon}
                  size="lg"
                  color="gray"
                />
              </HStack>
            </Pressable>
            {openIndex === index && (
              <Text className="mt-2 text-gray-700">{faq.answer}</Text>
            )}
          </Card>
        ))}
      </HStack>
    </VStack>
  );
};

export default FaqSection;
