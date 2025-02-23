import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { paint } from "@/public/assets/icons";

const BlogHeader = () => {
    return (
        <VStack className="shadow-brand-0 shadow-md mb-10">
            <Image
                src={paint}
                alt="Contact Us"
                width={1920}
                height={1080}
                className="object-cover w-full h-[40rem]"
            />

            <VStack className="mt-20 gap-4 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <VStack>
                    <Heading size="4xl" className="text-center text-white">
                        Contact Our Team
                    </Heading>
                </VStack>
                <VStack className="">
                    <Text size="xl" className="text-center text-white leading-loose">
                        Should you require assistance with our product or scaling on our
                        platform, our dedicated team is prepared to provide support and
                        ensure a seamless onboarding experience within 15 minutes.
                    </Text>
                </VStack>
            </VStack>
        </VStack>
    )
};

export default BlogHeader;
