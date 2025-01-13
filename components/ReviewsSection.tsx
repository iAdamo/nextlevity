import { VStack, HStack, Card, Text, Heading } from "./ui";
import Image from "next/image";

const ReviewsSection = () => {
  const reviews = [
       {
          name: "Alice Johnson",
          review:
            "This product has exceeded my expectations. The quality is top-notch and the customer service is outstanding. Highly recommend!",
          profession: "Business Analyst",
          photo: "/assets/homepage/icon-deal.png",
        },
        {
          name: "Michael Smith",
          review:
            "I've been using this service for a few months now and it has been a game-changer for my daily routine. The team behind it is very responsive and helpful.",
          profession: "Software Engineer",
          photo: "/assets/homepage/icon-deal.png",
        },
        {
          name: "Emily Davis",
          review:
            "Fantastic experience! The interface is user-friendly and the features are exactly what I needed. I will definitely be a long-term customer.",
          profession: "Graphic Designer",
          photo: "/assets/homepage/icon-deal.png",
        },
  ];
  return (
    <VStack className="bg-purple-50 md:p-14 p-6 rounded-3xl md:mx-14 my-4 gap-4">
      <Text className="md:text-3xl text-lg font-bold text-purple-950">
        REVIEWS
      </Text>
      <Text className="hidden md:block text-lg">What our customers are saying</Text>
      <HStack className="flex-wrap justify-center gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="p-5 rounded-lg max-w-[360px] shadow-md">
            <VStack className="mb-6">
              <Text size="sm">{review.review}</Text>
            </VStack>
            <HStack className="flex-row">
              <Image
                src={review.photo}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <VStack>
                <Heading size="sm" className="mb-1">
                  {review.name}
                </Heading>
                <Text size="sm">{review.profession}</Text>
              </VStack>
            </HStack>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
};

export default ReviewsSection;
