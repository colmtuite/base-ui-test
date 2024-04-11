import * as React from "react";
import { Tabs as BUITabs } from "@base_ui/react/tabs";

export const Tabs = (props) => {
  return <BUITabs {...props} className="TabsRoot" />;
};

export const TabsList = (props) => {
  return <BUITabs.List {...props} className="TabsList" />;
};

export const TabsTab = (props) => {
  return (
    <BUITabs.Tab {...props} className="TabsTab">
      {props.children}
    </BUITabs.Tab>
  );
};

export const TabsPanel = (props) => {
  return <BUITabs.Panel {...props} className="TabsPanel" />;
};

export const TabsIndicator = (props) => {
  return <BUITabs.Indicator {...props} className="TabsIndicator" />;
};
