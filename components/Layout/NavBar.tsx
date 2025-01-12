import { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Button,
  ButtonText,
  Link,
  LinkText,
} from "@/components/ui";
import Image from "next/image";
import Dropdown from "@/components/Overlays/dropdown";
import MobileSideBar from "../Overlays/MobileSideBar";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled past 50px
      if (window.scrollY > 38) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownOptions = [
    { label: "Profile", onPress: () => router.push("/") },
    { label: "Settings", onPress: () => router.push("/") },
    { label: "Logout", onPress: () => router.push("/") },
    { label: "Profile", onPress: () => router.push("/") },
    { label: "Settings", onPress: () => router.push("/") },
    { label: "Logout", onPress: () => router.push("/") },
  ];
  return (
    <VStack
      className={`transition-all duration-500 ease-in-out lg:mt-10 sticky top-0 z-10 ${
        isSticky ? "md:sticky md:w-full md:z-10" : "lg:mt-10 lg:px-10"
      }`}
    >
      <HStack className="bg-white p-5 items-center justify-between shadow-lg">
        <Button className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent">
          <Image
            className="w-10 h-10"
            src="/assets/homepage/icon-deal.png"
            alt="Icon"
            width={30}
            height={30}
          />
          <ButtonText className="text-2xl md:text-4xl font-extrabold text-blue-400  data-[hover=true]:text-none data-[active=true]:text-none">
            Nextlevity
          </ButtonText>
        </Button>
        <HStack className="items-center gap-6 hidden md:flex ml-auto">
          <Dropdown
            buttonLabel="SERVICES"
            options={dropdownOptions}
            offset={24}
          />
          <Link>
            <LinkText className="no-underline font-extrabold data-[hover=true]:text-green-700">
              RESULTS
            </LinkText>
          </Link>
          <Link>
            <LinkText className="no-underline font-extrabold data-[hover=true]:text-green-700">
              COMPANY
            </LinkText>
          </Link>
          <Link>
            <LinkText className="no-underline font-extrabold data-[hover=true]:text-green-700">
              BLOG
            </LinkText>
          </Link>
          <Button className="bg-green-700 data-[hover=true]:bg-green-600 data-[active=true]:bg-green-500">
            <ButtonText className="">WORK WITH US</ButtonText>
          </Button>
        </HStack>
        {/* Mobile Menu Button (hidden on larger screens) */}
        <MobileSideBar />
      </HStack>
    </VStack>
  );
};

export default NavBar;
