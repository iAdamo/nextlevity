import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextLevity",
  description:
    "At NextLevity, we specialize in turning your vision into reality. Our innovative strategies and creative solutions ensure your brand stands out in the digital landscape.",
  keywords:
    "digital marketing, business growth, branding, innovative solutions, NextLevity, next level, united kingdom, websites, programming",
  authors: [{ name: "Adam Babatunde Sanusi, Michael Atunde" }],
  robots: "index, follow",
  openGraph: {
    title: "NextLevity | Innovative Digital Marketing Solutions",
    description:
      "Discover how NextLevity can help your business grow with cutting-edge digital marketing strategies and creative solutions.",
    url: "https://www.nextlevity.co.uk",
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
};

import HomePage from "@/screens/homepage";

export default HomePage;
