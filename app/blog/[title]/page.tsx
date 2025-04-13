import type { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { title: string };
}): Metadata => ({
  title: `NextLevity | ${params.title}`,
  description: `Read more about ${params.title} on NextLevity.`,
  keywords: `NextLevity, ${params.title}, digital marketing, business growth, branding, innovative solutions`,
  authors: [{ name: "Adam Babatunde Sanusi, Michael Atunde" }],
  robots: "index, follow",
  openGraph: {
    title: `NextLevity | ${params.title}`,
    description: `Read more about ${params.title} on NextLevity.`,
    url: `https://www.nextlevity.co.uk/blog/${params.title}`,
    type: "website",
    images: [
      {
        url: "https://www.instagram.com/nextlevity.m/",
        width: 1200,
        height: 630,
        alt: "NextLevity - Digital Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextlevitym",
    title: `NextLevity | ${params.title}`,
    description: `Read more about ${params.title} on NextLevity.`,
    images: [
      {
        url: "https://www.instagram.com/nextlevity.m/",
        width: 1200,
        height: 630,
        alt: "NextLevity - Digital Marketing Solutions",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "NextLevity",
    statusBarStyle: "default",
  },
});

import BlogPost from "@/screens/blog/blogpost";

export default BlogPost;
