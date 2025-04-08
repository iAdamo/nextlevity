import Image from "next/image";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { story0, story1, story2 } from "@/public/assets/homepage";

const ReviewSection = () => {
  const stories = [
    {
      title: "How Chill Republic doubled their Revenue ",
      brief:
        "Nextlevity helped Chill Republic double their revenue by implementing targeted digital marketing strategies, enhancing their online presence, and driving customer engagement.",
      image: story0,
      url: "#",
    },
    {
      title:
        "Small Bakery's Sweet Success: From Local Favorite to Online Sensation",
      brief:
        "We worked closely with her to develop personalized marketing strategies that aligned perfectly with her business goals.",
      image: story1,
      url: "",
    },
    {
      title: "Fitness Fame: Gym Gains Global Recognition",
      brief:
        'The results were astounding. Within months, "FitLife Gym" experienced a significant increase in membershipand social media engagement"',
      image: story2,
      url: "",
    },
  ];
  return (
    <VStack className="">
      <VStack className="gap-4 justify-center items-center px-72">
        <Heading size="3xl" className="text-center">
          Success stories: Empowering Brands through our Digital Marketing
          Prowess
        </Heading>
        <Text size="md" className="text-center">
          At <span className="text-brand-1">Nextlevity</span>, We Deliver
          creative campaigns and measurable ROI to clients., we drive
          engagement, elevate visibility, and achieve exceptional
          <span className="text-brand-1">
            <a href="#"> Results. </a>
          </span>
          Let&apos;s take your business to the next level
        </Text>
      </VStack>
      <HStack className="flex-wrap justify-center md:gap-14 gap-2 py-10 rounded-lg">
        {stories.map((story, index) => (
          <Link
            key={index}
            href={story.url}
            className="md:w-80 md:h-auto w-24 transform transition-transform duration-300 hover:scale-105 -my-4"
          >
            <Card className="md:w-full  justify-between rounded-3xl shadow-hard-5 gap-2">
              <HStack className="">
                <Image
                  src={story.image}
                  className="object-cover w-full md:h-52 h-24 rounded-3xl "
                  alt={story.title}
                  width={1900}
                  height={1900}
                />
              </HStack>
              <HStack className="md:h-48 gap-2 flex-wrap border-0 justify-center items-center drop-shadow-lg">
                <Heading size="md" className="hidden md:inline text-center">
                  {story.title}
                </Heading>
                <Text>{story.brief}</Text>
              </HStack>
            </Card>
            <Text className="md:hidden text-center text-xs font-semibold">
              {story.title}
            </Text>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default ReviewSection;
