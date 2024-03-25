import * as React from "react";
import { Switch as BUISwitch } from "@mui/base/Switch";

export const Switch = (props) => {
  return (
    <BUISwitch {...props} className="SwitchRoot">
      <BUISwitch.Thumb className="SwitchThumb" />
    </BUISwitch>
  );
};
