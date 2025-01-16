import { useState } from "react";
import {
  HStack,
  VStack,
  Link,
  LinkText,
  Pressable,
  Heading,
  Icon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@/components/ui";

const PreFooter = () => {
  const info = [
    {
      title: "Marketing Solutions",
      links: [
        { name: "Brand Strategy", href: "/services/brand-strategy" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Social Media Marketing", href: "/services/social-media" },
        { name: "SEO & SEM", href: "/services/seo-sem" },
        { name: "Email Marketing", href: "/services/email-marketing" },
        {
          name: "Influencer Marketing",
          href: "/services/influencer-marketing",
        },
      ],
    },
    {
      title: "Creative Services",
      links: [
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "Video Production", href: "/services/video-production" },
        { name: "Web Design", href: "/services/web-design" },
        { name: "Marketing Automtions", href: "/services/automation" },
        { name: "UI/UX Design", href: "/services/ui-ux" },
        { name: "Brand Identity", href: "/services/brand-identity" },
      ],
    },
    {
      title: "Industries We Serve",
      links: [
        { name: "E-Commerce", href: "/industries/e-commerce" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Tech Startups", href: "/industries/tech-startups" },
        { name: "Education", href: "/industries/education" },
        { name: "Hospitality", href: "/industries/hospitality" },
      ],
    },
    {
      title: "For Clients",
      links: [
        { name: "Client Portal", href: "/client-portal" },
        { name: "Service Packages", href: "/service-packages" },
        { name: "Project Tracker", href: "/project-tracker" },
        { name: "Billing & Invoices", href: "/billing" },
        { name: "Feedback & Support", href: "/feedback-support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars & Events", href: "/resources/webinars" },
        { name: "Marketing Guides", href: "/resources/marketing-guides" },
        { name: "Tools & Templates", href: "/resources/tools-templates" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <HStack className="md:hidden p-4 my-4 flex-wrap justify-between">
      {info.map((item, index) => (
        <VStack key={item.title} className="md:flex-col gap-2 w-full md:w-auto">
          <Pressable onPress={() => toggleDropdown(index)}>
            <HStack className="justify-between py-2">
              <Heading size="sm" className="">
                {item.title}
              </Heading>
              <Icon
                as={openIndex === index ? ChevronUpIcon : ChevronDownIcon}
                size="lg"
                color="gray"
              />
            </HStack>
          </Pressable>

          {openIndex === index &&
            item.links.map((link) => (
              <Link key={link.name} href={link.href}>
                <LinkText className="no-underline text-primary-100 data-[hover=true]:underline data-[hover=true]:text-primary-100">
                  {link.name}
                </LinkText>
              </Link>
            ))}
        </VStack>
      ))}
    </HStack>
    <HStack className="hidden md:flex p-4 my-4 flex-wrap justify-between">
      {info.map((item) => (
        <VStack key={item.title} className="md:flex-col gap-2">
          <Heading size="sm">{item.title}</Heading>
          {item.links.map((link) => (
            <Link key={link.name} href={link.href}>
              <LinkText className="no-underline font-medium text-primary-100 data-[hover=true]:underline data-[hover=true]:text-primary-100">
                {link.name}
              </LinkText>
            </Link>
          ))}
        </VStack>
      ))}
    </HStack>
    </>
  );
};

export default PreFooter;
