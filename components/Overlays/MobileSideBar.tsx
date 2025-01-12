import React from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  ButtonText,
  ButtonIcon,
  Link,
  LinkText,
  Pressable,
  Icon,
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ChevronUpIcon,
  ChevronDownIcon,
  MenuIcon,
  ArrowRightIcon,
} from "@/components/ui";

const MobileSideBar = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [viewAllComponents, setViewAllComponents] = React.useState(false);

  const services = ["Service 1", "Service 2", "Service 3"];

  return (
    <>
      <Button
        className="md:hidden"
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonIcon as={MenuIcon} />
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
          setViewAllComponents(false);
        }}
        size="lg"
        anchor="left"
        className="md:hidden fixed h-screen"
      >
        <DrawerBackdrop />
        <DrawerContent className="w-auto h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <DrawerHeader>
            <Button className="bg-yellow-700 data-[hover=true]:bg-blue-400 data-[active=true]:bg-transparent">
              <ButtonText className="">
                Work With Nextlevity Strategies
              </ButtonText>
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Text size="2xl" className="text-typography-800">
              LogIn
            </Text>
            <VStack className="mt-4 gap-4">
              <VStack>
                {viewAllComponents ? (
                  <Pressable
                    onPress={() => {
                      setViewAllComponents(false);
                    }}
                  >
                    <HStack className="justify-between">
                      <Text className="font-extrabold text-yellow-700 hover:text-blue-200">
                        SERVICES
                      </Text>
                      <Icon as={ChevronUpIcon} />
                    </HStack>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setViewAllComponents(true);
                    }}
                  >
                    <HStack className="justify-between">
                      <Text className="font-extrabold text-blue-200 hover:text-yellow-700">
                        SERVICES
                      </Text>
                      <Icon as={ChevronDownIcon} size="sm" />
                    </HStack>
                  </Pressable>
                )}
                {viewAllComponents && (
                  <VStack className="pl-2 mt-2 ">
                    {services.map((service) => (
                      <Pressable
                        key={service}
                        className="w-full hover:bg-gray-50 hover:bg-opacity-20 rounded-md"
                      >
                        <HStack className="justify-between w-full p-2">
                          <Text className="font-bold text-blue-200 text-center">
                            {service}
                          </Text>
                          <Icon as={ArrowRightIcon} />
                        </HStack>
                      </Pressable>
                    ))}
                  </VStack>
                )}
              </VStack>
              <Link>
                <LinkText className="no-underline font-extrabold data-[hover=true]:text-yellow-700">
                  ABOUT
                </LinkText>
              </Link>
              <Link>
                <LinkText className="no-underline font-extrabold data-[hover=true]:text-yellow-700">
                  RESULTS
                </LinkText>
              </Link>
              <Link>
                <LinkText className="no-underline font-extrabold data-[hover=true]:text-yellow-700">
                  COMPANY
                </LinkText>
              </Link>
              <Link>
                <LinkText className="no-underline font-extrabold data-[hover=true]:text-yellow-700">
                  BLOG
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
