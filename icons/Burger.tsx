import React from "react";
import { DEFAULT_SIZE, IconProps } from "./Icon";

export const Burger = ({
  size = DEFAULT_SIZE,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeWidth="1.5"
  >
    <path d="M20 7H4m16 5H4m16 5H4" />
  </svg>
);

export default Burger;
