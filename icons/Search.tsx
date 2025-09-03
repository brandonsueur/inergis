import React from "react";
import { DEFAULT_SIZE, IconProps } from "./Icon";

export const Search = ({
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
    strokeWidth="2"
  >
    <g>
      <circle cx="11.5" cy="11.5" r="9.5" />
      <path strokeLinecap="round" d="M18.5 18.5L22 22" />
    </g>
  </svg>
);

export default Search;
