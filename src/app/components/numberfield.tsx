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
    <BUINumberField.ScrubArea
      {...props}
      className="NumberFieldScrubber"
      direction="horizontal"
      format={{
        style: "currency",
        currency: "USD",
      }}
      teleportDistance={300}
    >
      {props.children}
      <BUINumberField.ScrubAreaCursor>
        <span style={{ filter: "drop-shadow(2px 0 2px rgb(0 0 0 / 0.3))" }}>
          <svg
            width="26"
            height="14"
            viewBox="0 0 24 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
          >
            <path
              d="M19.3382 3.00223V5.40757L13.0684 5.40757L13.0683 5.40757L6.59302 5.40964V3V1.81225L5.74356 2.64241L1.65053 6.64241L1.28462 7L1.65053 7.35759L5.74356 11.3576L6.59302 12.1878V11L6.59302 8.61585L13.0684 8.61585H19.3382V11V12.1741L20.1847 11.3605L24.3465 7.36049L24.7217 6.9999L24.3464 6.63941L20.1846 2.64164L19.3382 1.82862V3.00223Z"
              fill="black"
              stroke="white"
            />
          </svg>
        </span>
      </BUINumberField.ScrubAreaCursor>
    </BUINumberField.ScrubArea>
  );
};

export const NumberFieldInput = (props) => {
  return <BUINumberField.Input {...props} className="TextField" />;
};
