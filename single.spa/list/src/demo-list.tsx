import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import List from "./components/list";

//const Root = React.lazy(()=> import("./components/root.component"))

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: List,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
