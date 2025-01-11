import React from "react";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  Link,
  LinkText,
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
  return (
    <Menu
      trigger={({ ...triggerProps }) => {
        return (
          <Link {...triggerProps }>
            <LinkText className="no-underline font-extrabold data-[hover=true]:text-yellow-700">
              {buttonLabel}
            </LinkText>
          </Link>
        );
      }}
      placement="bottom"
      offset={offset}
      crossOffset={60}
    >
      {options.map((option, index) => (
        <MenuItem
          key={index}
          className="sm:w-96"
          closeOnSelect
          onPress={option.onPress}
        >
          <MenuItemLabel>{option.label}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
