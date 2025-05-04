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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TrendingPost = ({
  item,
  index,
}: {
  item: (typeof trendingData)[0];
  index: number;
}) => (
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
        <Text size="xs" className="text-brand-0 font-semibold inline">
          {item.tags[0]}{" "}
          <span className="text-black">
            {`. ${Math.ceil(item.content.split(" ").length / 200)} min read`}
          </span>
        </Text>
      </HStack>
    </VStack>
  </HStack>
);

const RecentArticleCard = ({ item }: { item: (typeof recentBlogs)[0] }) => (
  <VStack className="gap-2 mb-4">
    <Image
      className="object-cover h-[400px] rounded-[2.5rem]"
      alt={item.title}
      src={item.image}
      width={1980}
      height={1280}
    />
    <HStack className="items-center gap-2">
      <Image alt="bloglogo" src={logosvg} width={30} height={30} />
      <Text size="xs" className="font-semibold">
        NextLevity
      </Text>
    </HStack>
    <Heading size="md">
      {item.title.length > 80
        ? `${item.title.substring(0, 80)}...`
        : item.title}
    </Heading>
    <HStack className="gap-2">
      <Text size="xs" className="text-brand-0 font-semibold inline">
        {item.tags[0]}{" "}
        <span className="text-black">
          {`. ${Math.ceil(item.content.split(" ").length / 200)} min read`}
        </span>
      </Text>
    </HStack>
  </VStack>
);

const BlogPost = () => {
  return (
    <VStack space="3xl">
      {/* Hero Section */}
      <VStack className="mb-20">
        <Image
          src="/assets/blog/blogpost/blogpost0.jpeg"
          alt="Contact Us"
          width={1920}
          height={1080}
          className="object-cover w-full h-[35rem]"
        />
      </VStack>

      {/* Main Content */}
      <VStack className="md:flex-row md:pl-20 md:pr-10 px-4 gap-10">
        <VStack className="md:w-4/5 gap-20">
          {/* Blog Content */}
          <VStack space="2xl">
            <Heading size="xl" className="md:text-3xl font-semibold">
              How Nextlevity Is Powering Business Growth in Lagos and London
              Through Smart Digital Marketing
            </Heading>
            <Text size="md" className="md:text-lg">
              NextLevity Analysis by Tolani Jone Fri March 15, 2025 Business 10
              min read
            </Text>
          </VStack>
          <VStack space="2xl" className="gap-10 md:pr-44">
            {/* Blog content here */}
            <Text size="sm" className="md:text-lg md:leading-8">
              In today&apos;s fast-paced, tech-driven world, the right digital
              marketing strategy can mean the difference between growth and
              stagnation for businesses. At Nextlevity, we are committed to
              helping small and medium-sized enterprises (SMEs) not only survive
              but thrive in competitive markets like Lagos, Nigeria and London,
              United Kingdom. Our recent work with brands such as De Chill
              Republic in Ikorodu, Lagos, as well as Sam Cut and Delight
              Multimedia in London, has proven that digital transformation is
              not just for big corporations—it&apos;s a game-changer for local
              businesses too.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>
                Our Mission Include Digital Empowerment for Local Businesses
              </strong>
              <br />
              At its core, Nextlevity was founded with one simple belief - Every
              business, no matter its size or location, deserves the opportunity
              to grow through smart marketing. We&apos;re not just a digital
              marketing agency; we&apos;re partners in progress. Our goal is to
              equip businesses in Lagos and the UK with cutting-edge tools and
              strategies that drive real, measurable results. From social media
              management and search engine optimization (SEO) to content
              creation and brand development, we tailor our services to the
              unique needs of each client.
            </Text>
            <Card
              variant="filled"
              className="md:mx-10 md:mr-14 rounded-[2.5rem] bg-[#D9D9D9] gap-2 md:px-16"
            >
              <Text
                size="sm"
                className="md:text-xl font-semibold md:leading-10"
              >
                Marketing is no longer about the stuff that you make, but about
                the stories you tell.
              </Text>
              <Text size="sm" className="ml-auto md:text-xl font-semibold">
                Seth Godin
              </Text>
            </Card>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>
                Spotlight on Lagos: De Chill Republic - A Taste of Culture,
                Digitally Amplified
              </strong>
              <br />
              Client: De Chill Republic, Ikorodu, Lagos <br />
              <strong>
                Challenge: Standing out in a competitive restaurant market and
                attracting local clientele.
              </strong>
              A full digital rebranding campaign including social media growth,
              local SEO, and content creation. When De Chill Republic approached
              us, they were already a beloved local spot in Ikorodu—but they
              lacked visibility online. Like many restaurants, they relied
              primarily on word-of-mouth and walk-in customers. In a city like
              Lagos, where digital interactions are rapidly replacing
              traditional marketing, this limited their growth potential..
            </Text>
            <Image
              className="object-fill"
              alt="image2"
              src="/assets/blog/blogpost/image2.png"
              width={1980}
              height={1280}
            />
            <Heading className="ml-10">From Idea to Reality</Heading>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>Social Media Overhaul:</strong>
              <br /> We redefined their Instagram and Facebook strategy with
              curated visuals, behind-the-scenes stories, influencer
              collaborations, and user-generated content. Geo-targeted
              Advertising: Using Facebook Ads and Google My Business, we
              attracted customers within a 10km radius of Ikorodu.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>Reputation Management:</strong>
              <br /> Encouraged satisfied customers to leave reviews, boosting
              trust and SEO rankings.
              <strong>Seasonal Promotions:</strong>
              Created limited-time campaigns for holidays and weekends to boost
              foot traffic.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>The Result:</strong> <br /> In less than 90 days, De Chill
              Republic saw a 60% increase in daily walk-ins and a 45% growth in
              online reservations. Their Instagram following grew by over 300%,
              and their engagement rate tripled.
            </Text>

            <Image
              className="object-fill"
              alt="image2"
              src="/assets/blog/blogpost/image3.png"
              width={1980}
              height={1280}
            />
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>
                Across the Pond: Empowering Small-Scale Enterprises in London
              </strong>
              <br />
              London is a bustling hub of innovation, but for many small
              businesses, standing out in the digital space can be overwhelming.
              Our work with two unique clients—Sam Cut, a grooming and
              barbershop brand, and Delight Multimedia, a creative multimedia
              outfit—demonstrates how Nextlevity helps local UK businesses
              compete with big players.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>
                Case Study: Sam Cut - Grooming Brand That Cuts Above the Rest
              </strong>
              <strong>Challenge:</strong> Low digital presence, limited
              branding, minimal customer retention. We created a solution which
              include the A strong identity-based campaign combining modern
              branding with customer engagement strategies. Sam Cut is more than
              a barbershop; it&apos;s a lifestyle brand rooted in community and
              style. But before partnering with us, they had little to no online
              traction. Our team stepped in to elevate their presence through:
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>Visual Branding:</strong> Developed a modern, masculine
              logo and style guide that reflected their target audience. Content
              Strategy: Weekly grooming tips, customer spotlights, and trend
              insights across Instagram and TikTok. Online Booking System which
              integrated a seamless scheduling platform to reduce appointment
              friction. Within 4 months, Sam Cut reported a 70% increase in new
              bookings through Instagram and Google. Their video content
              averaged 5,000+ views per week, and repeat customers rose
              significantly thanks to our loyalty program implementation.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              Another Case Study is Delight Multimedia - Lighting Up the London
              Creative Scene Challenge: High competition in the creative space,
              underutilized digital assets. We proferred a solution which
              included Strategic content distribution, niche targeting, and lead
              generation funnel. Delight Multimedia is a company that
              specializes in photography, videography, and content production
              for events and brands. They had amazing content, but it
              wasn&apos;t reaching the right audience. Our task was to amplify
              their creativity with visibility.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>What We Did:</strong> <br />
              <strong>SEO Optimization:</strong> Structured their website and
              blog content to rank for niche-specific keywords like &quot;London
              event videographer&quot; and &quot;affordable brand photography
              UK.&quot; We also helped with Email{" "}
              <strong>Marketing Campaigns</strong>- Built a segmented list of
              past and prospective clients and launched monthly value-packed
              newsletters. Designed high-converting landing pages offering free
              consultations or sample portfolio packages. Their website traffic
              increased by 150%, with a 40% rise in client inquiries. Their
              email open rate averaged 38%—well above the industry standard.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <strong>Our Approach: What Makes Nextlevity Different?</strong>
              <br />
              There&apos;s no “one-size-fits-all” in digital marketing. At
              Nextlevity, we pride ourselves on: Localized Strategy:
              Understanding the Lagos and London markets allows us to build
              culturally relevant, high-impact campaigns. Collaborative Mindset:
              We treat clients as partners. Your goals are our goals.
              Data-Driven Decisions: Every campaign is backed by analytics,
              KPIs, and real-time performance tracking. We specialize in working
              with startups, local brands, and passion-driven entrepreneurs.
              Whether you&apos;re opening a restaurant in Ikorodu or launching a
              studio in East London, we scale your presence for visibility and
              profit.
            </Text>
            <Text size="sm" className="md:text-lg md:leading-8">
              <span className="font-extrabold">What&apos;s Next?</span> <br />{" "}
              The success stories of De Chill Republic, Sam Cut, and Delight
              Multimedia are just the beginning. As we expand our services and
              strengthen our presence in both Lagos and London, we remain
              committed to our core purpose—helping businesses grow through
              creative, strategic, and results-focused digital marketing. If
              you&apos;re a business owner looking to transform your digital
              presence, Nextlevity is ready to take you to the next level.
            </Text>
          </VStack>
        </VStack>
        {/* Sidebar */}
        <VStack className="md:w-1/4 md:pt-52 gap-32">
          {/* Trending Posts */}
          <VStack className="gap-8">
            <Heading size="xl">Trending Post</Heading>
            <VStack className="rounded-[2.5rem] gap-10 p-2 bg-[#D9D9D9]">
              <Image
                className="object-fill h-[322px] rounded-[2.5rem]"
                alt="Trending Image"
                src="/assets/blog/blogpost/trending0.png"
                width={1980}
                height={1280}
              />
              <VStack className="gap-4 mb-4">
                {trendingData.map((item, index) => (
                  <TrendingPost key={index} item={item} index={index} />
                ))}
              </VStack>
            </VStack>
          </VStack>

          {/* Recent Articles */}
          <VStack className="gap-8">
            <Heading className="italic">Recent Articles</Heading>
            {/* Desktop View */}
            <VStack className="hidden md:flex gap-4">
              {recentBlogs.map((item, index) => (
                <RecentArticleCard key={index} item={item} />
              ))}
            </VStack>
            {/* Mobile View */}
            <VStack className="gap-4 md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1.4}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="w-[22rem]"
              >
                {recentBlogs.map((item, index) => (
                  <SwiperSlide key={index}>
                    <RecentArticleCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </VStack>
          </VStack>
        </VStack>
      </VStack>

      {/* All Articles and Newsletter */}
      <AllArticles />
      <Newsletter />
    </VStack>
  );
};

export default BlogPost;
