import React from "react";
import { useContext } from "react";
import { RouterContext } from "./BroswerRouter";

export default function Link({ to, children }) {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e) => {
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}
