import * as React from "react";
import { NumberField as BUINumberField } from "@mui/base/NumberField";

export const NumberField = (props) => {
  return (
    <BUINumberField {...props} className="NumberField">
      {props.children}
    </BUINumberField>
  );
};

export const NumberFieldGroup = (props) => {
  return (
    <BUINumberField.Group {...props} className="NumberFieldGroup">
      {props.children}
    </BUINumberField.Group>
  );
};

export const NumberFieldIncrement = (props) => {
  return (
    <BUINumberField.Increment {...props} className="Button">
      <svg
        data-testid="geist-icon"
        height="16"
        stroke-linejoin="round"
        viewBox="0 0 16 16"
        width="16"
        className="Icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
          fill="currentColor"
        ></path>
      </svg>
    </BUINumberField.Increment>
  );
};

export const NumberFieldDecrement = (props) => {
  return (
    <BUINumberField.Decrement {...props} className="Button">
      <svg
        data-testid="geist-icon"
        height="16"
        stroke-linejoin="round"
        viewBox="0 0 16 16"
        width="16"
        className="Icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z"
          fill="currentColor"
        ></path>
      </svg>
    </BUINumberField.Decrement>
  );
};

export const NumberFieldScrubber = (props) => {
  return (
    <BUINumberField.ScrubArea {...props} className="NumberFieldScrubber">
      {props.children}
    </BUINumberField.ScrubArea>
  );
};

export const NumberFieldInput = (props) => {
  return <BUINumberField.Input {...props} className="TextField" />;
};

// export const NumberFieldInput = React.forwardRef<NumberFieldInput>(
//   ({ className, children, ...props }, forwardedRef) => (
//     <BUINumberField.Input {...props} />
//   )
// );

// export const DropdownMenu = React.forwardRef<BUIMenu>(
//   ({ className, children, ...props }, forwardedRef) => (
//     <BUIMenu
//       slotProps={{
//         root: { className: "DropdownMenuPopup" },
//         listbox: { className: "DropdownMenuListbox" },
//       }}
//       {...props}
//     >
//       {children}
//     </BUIMenu>
//   )
// );
