"use client";

import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { logosvg } from "@/public/assets/icons";
import AllArticles from "../AllArticles";
import Newsletter from "@/screens/contact/Newsletter";
import trendingData from "./trending.json";
import recentBlogs from "./recents.json";

const BlogPost = () => {
  return (
    <VStack>
      <VStack className="mb-20">
        <Image
          src="/assets/blog/blogpost/blogpost0.jpeg"
          alt="Contact Us"
          width={1920}
          height={1080}
          className="object-cover w-full h-[35rem]"
        />
      </VStack>
      <HStack className="pl-20 pr-10">
        <VStack className="w-4/5 gap-20">
          <VStack space="2xl">
            <Heading size="2xl" className="font-semibold">
              NextLevity: Revolutionizing Business Growth with Digital Marketing
              Solutions
            </Heading>

            <Text>
              NextLevity Analysis by Tolani Jone Fri March 15, 2025 Business 10
              min read
            </Text>
          </VStack>
          <VStack space="2xl" className="gap-10 pr-44">
            <Text className="leading-8 font-semibold">
              At NextLevity, we understand the unique challenges that small
              businesses face in the digital landscape. Our tailored solutions
              are designed to maximize impact with minimal resources, enabling
              you to compete effectively and thrive in the digital age.
            </Text>
            <Text className="leading-8 font-semibold">
              We offer automated solutions that take the hassle out of
              repetitive and time-consuming tasks like content creation,
              customer service, and social media management.
            </Text>
            <Text className="leading-8 font-semibold">
              With our AI-driven tools, you can free up valuable time to focus
              on strategic decision-making and business growth. Our expert team
              works closely with you to develop personalized marketing
              strategies that align with your business goals. By leveraging
              data-driven insights, we create campaigns that drive brand
              awareness, increase customer engagement, and boost sales.
            </Text>
            <Text className="leading-8 font-semibold">
              Our AI-powered analytics provide deep insights into customer
              behavior, preferences, and trends. These valuable insights enable
              you to tailor your marketing efforts for maximum effectiveness,
              ensuring that every dollar spent delivers a high return on
              investment.
            </Text>
            <Card
              variant="filled"
              className="mx-10 mr-14 rounded-[2.5rem] bg-[#D9D9D9] gap-2 px-16"
            >
              <Text className="text-xl font-semibold leading-10">
                Marketing is no longer about the stuff that you make, but about
                the stories you tell.
              </Text>
              <Text className="ml-auto text-xl font-semibold">Seth Godin</Text>
            </Card>
            <Text className="leading-8 font-semibold">
              For large enterprises, NextLevity offers scalable and
              sophisticated marketing strategies that drive innovation and
              optimize marketing efforts.
            </Text>
            <Text className="leading-8 font-semibold">
              Our expertise ensures that every aspect of your digital marketing
              is fine-tuned for success. Our cutting-edge AI algorithms analyze
              vast amounts of data to identify patterns and trends. This
              intelligence allows you to make data-driven decisions that inform
              your marketing strategies and drive growth.
            </Text>
            <Text className="leading-8 font-semibold">
              Enhance customer experiences with personalized marketing campaigns
              that deliver relevant content, product recommendations, and
              offers. Our AI-powered tools ensure that your messages resonate
              with diverse customer segments, increasing conversion rates and
              customer loyalty.
            </Text>
            <Text className="leading-8 font-semibold">
              We streamline content production with AI-driven tools that create
              high-quality and engaging materials. From compelling ad copy to
              visually stunning graphics and videos, our creative solutions
              capture the attention of your target audience and keep them coming
              back for more.
            </Text>
            <Image
              className="object-fill"
              alt="image2"
              src="/assets/blog/blogpost/image2.png"
              width={1980}
              height={1280}
            />
            <Heading className="ml-10">The Bakery Beakthrough</Heading>
            <Text className="leading-8 font-semibold">
              Meet Sarah, a dedicated baker and owner of &quot;Sweet
              Delights,&quot; a cozy bakery nestled in the heart of a bustling
              neighborhood. Sarah&apos;s passion for baking was evident in every
              pastry, cake, and loaf of bread that emerged from her oven. Her
              loyal local customers couldn&apos;t get enough of her delectable
              treats, but despite her best efforts, Sarah struggled to expand
              her reach and increase sales. She knew she needed to step up her
              digital marketing game but didn&apos;t have the time or expertise
              to do so.
            </Text>
            <Text className="leading-8 font-semibold">
              That&apos;s when Sarah discovered NextLevity, a digital marketing
              company with a reputation for helping small businesses thrive. We
              began by offering Sarah automated solutions that took the hassle
              out of repetitive and time-consuming tasks like content creation,
              customer service, and social media management. With our AI-driven
              tools, Sarah was able to free up valuable time to focus on what
              she loved most - baking and creating new recipes.
            </Text>
            <Text className="leading-8 font-semibold">
              Our expert team worked closely with Sarah to develop personalized
              marketing strategies that aligned with her business goals. By
              leveraging data-driven insights, we created campaigns that drove
              brand awareness, increased customer engagement, and boosted sales.
              We helped Sarah optimize her social media presence, craft engaging
              content, and connect with her audience in meaningful ways. Our
              AI-powered analytics provided deep insights into customer
              behavior, preferences, and trends. These valuable insights enabled
              Sarah to tailor her marketing efforts for maximum effectiveness,
              ensuring that every dollar spent delivered a high return on
              investment. We identified the best times to post on social media,
              the most popular products among her customers, and the types of
              content that resonated the most.
            </Text>
            <Image
              className="object-fill"
              alt="image2"
              src="/assets/blog/blogpost/image3.png"
              width={1980}
              height={1280}
            />
            <Text className="leading-8 font-semibold">
              Within months, &quot;Sweet Delights&quot; saw a significant
              increase in online orders and social media followers. Sarah&apos;s
              bakery became a local favorite and a must-visit destination for
              tourists. Word of mouth spread, and soon, people from neighboring
              towns were making special trips to experience the delightful
              treats at &quot;Sweet Delights.&quot;
            </Text>
            <Text className="leading-8 font-semibold">
              Sarah&apos;s story is a testament to the power of digital
              marketing and the impact it can have on small businesses. With the
              right tools and strategies, even the smallest bakery can achieve
              remarkable growth and success. At NextLevity, we are committed to
              helping businesses like Sarah&apos;s thrive in the digital age.
            </Text>
            <Text className="leading-8 font-semibold">
              Thank you for being a valued member of the NextLevity community.
              We&apos;re committed to providing you with the best insights,
              tips, and updates in digital marketing to help you stay ahead of
              the curve. Our mission is to unlock new possibilities and
              revolutionize your business growth with cutting-edge digital
              marketing solutions.
            </Text>
            <Text className="leading-8 font-semibold">
              Stay tuned for more valuable content in our future newsletters.
              Together, let&apos;s achieve remarkable success and take your
              business to new heights.
            </Text>
          </VStack>
        </VStack>
        <VStack className="w-1/4 pt-52 gap-32">
          <VStack className="gap-8">
            <Heading size="xl">Trending Post</Heading>
            <VStack className="rounded-[2.5rem] gap-10 p-2 bg-[#D9D9D9]">
              <Image
                className="object-fill h-[322px] rounded-[2.5rem] bg-[#D9D9D9]"
                alt="image2"
                src="/assets/blog/blogpost/trending0.png"
                width={1980}
                height={1280}
              />
              <VStack className="gap-4 mb-4">
                {trendingData.map((item, index) => (
                  <HStack key={index} className="items-center space-x-4">
                    <Heading size="2xl" className="w-1/12 text-brand-0">
                      {index}
                    </Heading>
                    <VStack className="w-11/12 gap-2">
                      <Text className="text-sm font-semibold">
                        {item.title.length > 80
                          ? `${item.title.substring(0, 80)}...`
                          : item.title}
                      </Text>
                      <HStack className="gap-2">
                        <Text
                          size="xs"
                          className="text-brand-0 font-semibold inline"
                        >
                          {item.tags[0]}{" "}
                          <span className="text-black">
                            {`. ${Math.ceil(
                              item.content.split(" ").length / 200
                            )} min read`}
                          </span>
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </VStack>
          <VStack className="gap-8">
            <Heading className="italic">Recent Articles</Heading>
            <VStack className="gap-4 ">
              {recentBlogs.map((item, index) => (
                <VStack key={index} className="gap-2 mb-4">
                  <Image
                    className="object-cover h-[400px] rounded-[2.5rem]"
                    alt={item.title}
                    src={item.image}
                    width={1980}
                    height={1280}
                  />
                  <HStack className="items-center gap-2">
                    <Image
                      className=""
                      alt="bloglogo"
                      src={logosvg}
                      width={30}
                      height={30}
                    />
                    <Text size="xs" className="font-semibold">
                      NextLevity
                    </Text>
                  </HStack>
                  <Heading className="">
                    {item.title.length > 80
                      ? `${item.title.substring(0, 80)}...`
                      : item.title}
                  </Heading>

                  <HStack className="gap-2">
                    <Text
                      size="xs"
                      className="text-brand-0 font-semibold inline"
                    >
                      {item.tags[0]}{" "}
                      <span className="text-black">
                        {`. ${Math.ceil(
                          item.content.split(" ").length / 200
                        )} min read`}
                      </span>
                    </Text>
                  </HStack>
                </VStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </HStack>
      <AllArticles />
      <Newsletter />
    </VStack>
  );
};

export default BlogPost;
