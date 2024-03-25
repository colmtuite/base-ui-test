"use client";
import * as React from "react";
import {
  Switch,
  Checkbox,
  NumberFieldInput,
  NumberField,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldScrubber,
  NumberFieldGroup,
} from "./components";

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <Switch />
          <Switch disabled />
          <Switch defaultChecked disabled />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <Checkbox />
          <Checkbox disabled />
          <Checkbox defaultChecked disabled />
          <Checkbox indeterminate />
        </div>
        <NumberField
          defaultValue={0}
          id="amount"
          min={0}
          largeStep={20}
          smallStep="0.1"
          format="decimal"
        >
          <NumberFieldScrubber>
            <label
              htmlFor="amount"
              style={{
                all: "unset",
                fontFamily: "untitled sans",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 8,
                display: "inline-flex",
              }}
            >
              Amount
            </label>
          </NumberFieldScrubber>
          <NumberFieldGroup>
            <NumberFieldDecrement
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <NumberFieldInput
              id="amount"
              style={{
                borderRadius: 0,
                borderLeft: "none",
                borderRight: "none",
              }}
            />
            <NumberFieldIncrement
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            />
          </NumberFieldGroup>
        </NumberField>
      </div>
    </main>
  );
}
