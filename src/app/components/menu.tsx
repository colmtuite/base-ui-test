import * as React from "react";
// import classNames from "classnames";
import { Dropdown as BUIDropdown } from "@mui/base/Dropdown";
import { MenuButton as BUIMenuButton } from "@mui/base/MenuButton";
import { Menu as BUIMenu } from "@mui/base/Menu";
import { MenuItem as BUIMenuItem } from "@mui/base/MenuItem";

export const Dropdown = React.forwardRef<BUIDropdown>(
  ({ className, children, ...props }, forwardedRef) => (
    <BUIDropdown {...props}>{children}</BUIDropdown>
  )
);

export const DropdownButton = React.forwardRef<BUIMenuButton>(
  ({ className, children, ...props }, forwardedRef) => (
    <BUIMenuButton {...props}>{children}</BUIMenuButton>
  )
);

export const DropdownMenu = React.forwardRef<BUIMenu>(
  ({ className, children, ...props }, forwardedRef) => (
    <BUIMenu
      slotProps={{
        root: { className: "DropdownMenuPopup" },
        listbox: { className: "DropdownMenuListbox" },
      }}
      {...props}
    >
      {children}
    </BUIMenu>
  )
);

export const DropdownMenuItem = React.forwardRef<BUIMenuItem>(
  ({ className, children, ...props }, forwardedRef) => (
    <BUIMenuItem className="DropdownMenuItem" {...props}>
      {children}
    </BUIMenuItem>
  )
);
