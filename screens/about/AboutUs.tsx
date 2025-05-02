import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
// import { Heading } from "@/components/ui/heading";

const AboutUs = () => {
  return (
    <VStack className="md:m-20 m-4 md:gap-10 gap-4 justify-center items-center md:px-20">
      <Text size="3xl" className="text-center">
        About Us
      </Text>
      <Text size="md" className="text-center">
        In Lagos, where dreams thrive but competition is fierce, a small
        business owner struggled to be seen. Her passion was undeniable, but her
        voice was lost in the noise. This challenge sparked an idea—a vision for
        a partner who could help businesses like hers not just survive, but
        thrive.
      </Text>
      <Text size="md" className="text-center">
        That vision became Nextlevity. Born from the struggles of Nigerian
        entrepreneurs, Nextlevity was built to elevate visibility, engagement,
        and growth. With innovative, data-driven strategies and a deep
        understanding of local markets, we turn challenges into triumphs.
      </Text>
      <Text size="md" className="text-center">
        From small startups to large enterprises, Nextlevity is here to help
        businesses rise above the noise and shine in the digital age.
      </Text>
      <Text size="md" className="text-center italic font-semibold">
        This is <span className="text-brand-0">Nextlevity:</span> where
        challenges inspire innovation, and every business finds its spotlight.
      </Text>
    </VStack>
  );
};

export default AboutUs;
