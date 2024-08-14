import React from "react";
import { useContext } from "react";
import { RouterContext } from "./BroswerRouter";

export default function Routes({ children }) {
  const { currentPath } = useContext(RouterContext);

  let element;
  React.Children.forEach(children, (child) => {
    if (child.props.path === currentPath) {
      element = child;
    }
  });

  return element;
}
