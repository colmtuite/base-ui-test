import * as React from "react";
import { Checkbox as BUICheckbox } from "@mui/base/Checkbox";

export const Checkbox = (props) => {
  return (
    <BUICheckbox {...props} className="CheckboxRoot">
      <BUICheckbox.Indicator className="CheckboxIndicator" />
    </BUICheckbox>
  );
};
