import { VStack, Heading, Text } from "@/components/ui";

const AboutUs = () => {
  return (
    <VStack className="mt-20 gap-10 justify-center items-center px-40">
      <Heading size="3xl" className="text-center">
        About Us
      </Heading>
      <Text size="md" className="text-center">
        In Lagos, where dreams thrive but competition is fierce, a small
        business owner struggled to be seen. Her passion was undeniable, but her
        voice was lost in the noise. This challenge sparked an idea—a vision for
        a partner who could help businesses like hers not just survive, but
        thrive.
      </Text>
      <Text>
        That vision became Nextlevity. Born from the struggles of Nigerian
        entrepreneurs, Nextlevity was built to elevate visibility, engagement,
        and growth. With innovative, data-driven strategies and a deep
        understanding of local markets, we turn challenges into triumphs.
      </Text>
      <Text>
        From small startups to large enterprises, Nextlevity is here to help
        businesses rise above the noise and shine in the digital age.
      </Text>
      <Text>
        This is <span className="text-brand-0">Nextlevity:</span> where challenges inspire innovation,
        and every business finds its spotlight.
      </Text>
    </VStack>
  );
};

export default AboutUs;
