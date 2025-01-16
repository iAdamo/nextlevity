import { useState, useEffect } from "react";
import {
  Link,
  LinkText,
  Popover,
  PopoverBackdrop,
  PopoverContent,
} from "@/components/ui";

interface DropdownOption {
  label: string;
  onPress: () => void;
}

interface DropdownProps {
  buttonLabel: string;
  options: DropdownOption[];
  offset?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonLabel,
  options,
  offset,
}) => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <Popover
      trigger={(triggerProps) => {
        return (
          <Link
            {...triggerProps}
            onMouseEnter={() => triggerProps.onPress?.()}
            onMouseLeave={() => triggerProps.onPress?.()}
          >
            <LinkText className="no-underline text-purple-500 font-extrabold data-[hover=true]:text-yellow-700">
              {buttonLabel}
            </LinkText>
          </Link>
        );
      }}
      placement="bottom"
      offset={offset}
      className={`transition-all duration-500 ease-in-out w-full fixed ${
        isSticky ? "md:-mt-10" : ""
      }`}
    >
      <PopoverBackdrop />
      <PopoverContent className="gap-2 transition-all duration-500 ease-in-out ">
        {options.map((option, index) => (
          <Link
            key={index}
            className="w-96"
            onPress={option.onPress}
          >
            <LinkText>{option.label}</LinkText>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
