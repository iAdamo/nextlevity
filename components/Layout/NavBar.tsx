import {
  VStack,
  HStack,
  LinkText,
  Link,
  Button,
  ButtonText,
} from "@/components/ui";
import Image from "next/image";
import Dropdown from "@/components/Overlays/dropdown";
import MobileSideBar from "../Overlays/MobileSideBar";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const dropdownOptions = [
    { label: "Profile", onPress: () => router.push("/") },
    { label: "Settings", onPress: () => router.push("/") },
    { label: "Logout", onPress: () => router.push("/") },
    { label: "Profile", onPress: () => router.push("/") },
    { label: "Settings", onPress: () => router.push("/") },
    { label: "Logout", onPress: () => router.push("/") },
  ];
  return (
    <VStack className="items-center justify-center z-10 w-full">
      <HStack className="py-10 w-full items-center justify-between pl-10 pr-20">
        <Button
          onPress={() => router.replace("/")}
          className="p-0 items-center justify-center"
        >
          <Image
            className="object-cover"
            src="/assets/homepage/logo.png"
            alt="Icon"
            width={360}
            height={176}
          />
        </Button>
        <HStack className="items-center gap-6 hidden md:flex ml-48">
          <Link href="/results">
            <LinkText className="no-underline text-text-primary font-extrabold data-[hover=true]:text-brand-0 data-[active=true]:text-brand-1">
              Services
            </LinkText>
          </Link>
          <Link href="/results">
            <LinkText className="no-underline text-text-primary font-extrabold data-[hover=true]:text-brand-0 data-[active=true]:text-brand-1">
              Results
            </LinkText>
          </Link>
          <Link href="/about">
            <LinkText className="no-underline text-text-primary font-extrabold data-[hover=true]:text-brand-0 data-[active=true]:text-brand-1">
              About
            </LinkText>
          </Link>
          <Link href="/blog">
            <LinkText className="no-underline text-text-primary font-extrabold data-[hover=true]:text-brand-0 data-[active=true]:text-brand-1">
              Blog
            </LinkText>
          </Link>
          <Link href="/contact">
            <LinkText className="no-underline text-text-primary font-extrabold data-[hover=true]:text-brand-0 data-[active=true]:text-brand-1">
              Contact
            </LinkText>
          </Link>
        </HStack>
        <Button className="rounded-3xl bg-brand-0 data-[hover=true]:bg-brand-1 data-[active=true]:bg-brand-0">
          <ButtonText className="text-txt-0">Get in touch</ButtonText>
        </Button>
        {/* Mobile Menu Link (hidden on larger screens) */}
        <MobileSideBar />
      </HStack>
    </VStack>
  );
};

export default NavBar;
