import React from "react";
import { DEFAULT_SIZE, IconProps } from "./Icon";

export const At = ({
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
    strokeLinejoin="round"
    strokeWidth="1.5"
  >
    <path d="M15.6 8.4v4.5a2.7 2.7 0 1 0 5.4 0V12a9 9 0 1 0-3.6 7.2M15.6 12a3.6 3.6 0 1 1-7.2 0a3.6 3.6 0 0 1 7.2 0" />
  </svg>
);

export default At;
