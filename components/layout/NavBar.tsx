"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileSideBar from "../../components/Overlays/MobileSideBar";
import { useRouter, usePathname } from "next/navigation";
import { logowhite } from "@/public/assets/icons";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button } from "@/components/ui/button";
import { logo } from "@/public/assets/icons";

const NavBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const options = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Memoized styles to avoid unnecessary re-renders
  const styles = useMemo(() => {
    const isContactPage = currentPath === "/contact";

    return {
      navBarClass: isContactPage ? "bg-brand-0" : "bg-transparent",
      navBarLogo: isContactPage ? logowhite : logo,
      linkClass: isContactPage
        ? "no-underline text-white text-lg font-bold hover:text-brand-1"
        : "no-underline text-text-primary text-lg font-bold hover:text-brand-0",
      buttonClass: isContactPage ? "bg-white" : "bg-brand-0",
    };
  }, [currentPath]);

  return (
    <VStack
      className={`items-center justify-center z-10 w-full ${styles.navBarClass}`}
    >
      <HStack className="md:py-10 py-4 w-full items-center justify-between md:px-10 px-5">
        <Button
          variant="link"
          onPress={() => router.replace("/")}
          className="p-0"
        >
          <Image
            src={styles.navBarLogo}
            alt="Logo"
            width={1200}
            height={1176}
            className="md:w-52 w-36"
          />
        </Button>

        {/* Desktop Navigation */}
        <HStack className="items-center gap-6 hidden md:flex ml-8">
          {options.map((option) => (
            <Link
              key={option.name}
              href={option.href}
              className={`${styles.linkClass} ${
                currentPath === option.href ? "font-extrabold" : ""
              }`}
            >
              {option.name}
            </Link>
          ))}
        </HStack>

        <Link
          href="/contact#form"
          className={`hidden md:flex text-txt-0 font-bold py-2 px-6 text-center rounded-3xl hover:bg-brand-1 active:bg-brand-0 ${styles.buttonClass}`}
        >
          Get in touch
        </Link>

        <MobileSideBar />
      </HStack>
    </VStack>
  );
};

export default NavBar;
