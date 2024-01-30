"use client";
import * as React from "react";
import { Button as BUIButton } from "@mui/base/Button";
import { Switch } from "@mui/base/Switch";
import { MenuItem } from "@mui/base/MenuItem";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from "./components";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Slider } from "@mui/base/Slider";
import { Input } from "@mui/base/Input";
import { Select, SelectRootSlotProps } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Snackbar } from "@mui/base/Snackbar";
import { SnackbarCloseReason } from "@mui/base/useSnackbar";

const Button = React.forwardRef<BUIButton>(
  ({ className, children, ...props }, forwardedRef) => (
    <BUIButton className="Button" {...props}>
      {children}
    </BUIButton>
  )
);

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
          width: 500,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button>Button</Button>
        <Switch
          slotProps={{
            root: { className: "SwitchRoot" },
            input: { className: "SwitchInput" },
            thumb: { className: "SwitchThumb" },
            track: { className: "SwitchTrack" },
          }}
        />
        <Dropdown>
          <DropdownButton slots={{ root: Button }}>Dropdown</DropdownButton>
          <DropdownMenu placement="right">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Language settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Language settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
        <Input
          slotProps={{
            root: { className: "TextFieldRoot" },
            input: { className: "TextFieldInput" },
          }}
          placeholder="Type something"
        />
        <BaseNumberInput
          slotProps={{
            root: { className: "NumberField" },
            input: { className: "NumberFieldInput" },
            decrementButton: {
              className: "NumberFieldDecrement",
              children: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ),
            },
            incrementButton: {
              className: "NumberFieldIncrement",
              children: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ),
            },
          }}
          placeholder="NumberField"
        />
        <Select
          className="Select"
          slots={{
            root: Button,
          }}
          slotProps={{
            listbox: { className: "SelectListbox" },
            popper: { className: "SelectPopper" },
          }}
          defaultValue={10}
        >
          <Option className="SelectOption" value={10}>
            Documentation
          </Option>
          <Option className="SelectOption" value={20}>
            Components
          </Option>
          <Option className="SelectOption" value={30}>
            Features
          </Option>
        </Select>

        <TextareaAutosize
          className="Textarea"
          placeholder="Auto-resizing textarea"
        />
        <Slider
          defaultValue={[20, 37]}
          slotProps={{
            root: { className: "Slider" },
            rail: { className: "SliderRail" },
            track: { className: "SliderTrack" },
            thumb: { className: "SliderThumb", tabIndex: 0 },
          }}
        />
      </div>
    </main>
  );
}
