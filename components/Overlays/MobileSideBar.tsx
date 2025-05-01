import React from "react";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@/components/ui/drawer";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import {

  MenuIcon,
} from "@/components/ui/icon";
import { Link, LinkText } from "@/components/ui/link";

const MobileSideBar = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <>
      <Button
        className="md:hidden p-0"
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonIcon as={MenuIcon} className="w-10 h-10 text-black" />
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="lg"
        anchor="left"
        className="md:hidden fixed h-screen"
      >
        <DrawerBackdrop />
        <DrawerContent className="w-auto h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <DrawerHeader>
            <Button className="bg-yellow-500 data-[hover=true]:bg-yellow-400 data-[active=true]:bg-yellow-300">
              <ButtonText className="">
                Work With Nextlevity Strategies
              </ButtonText>
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Text size="2xl" className="hidden text-typography-800">
              LogIn
            </Text>
            <VStack className="mt-4 gap-4">
              <Link href="/">
                <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-500">
                  Home
                </LinkText>
              </Link>
              <Link href="/services">
                <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-500">
                  Services
                </LinkText>
              </Link>
              <Link href="/about">
                <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-500">
                  About
                </LinkText>
              </Link>
              <Link href="/blog">
                <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-500">
                  Blog
                </LinkText>
              </Link>
              <Link href="/contact">
                <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-500">
                  Contact
                </LinkText>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileSideBar;
