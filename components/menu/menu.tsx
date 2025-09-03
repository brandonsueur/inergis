"use client";

import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navigationsLinks } from "@/constants";

export const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches);
    };

    checkDarkMode();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkDarkMode);

    return () => mediaQuery.removeEventListener("change", checkDarkMode);
  }, []);

  return (
    <header className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      {/* Logo */}
      <Link href="/">
        <Image
          src={"logo-blue.svg"}
          alt="Logo Inergis"
          width={180}
          height={49}
          className="h-10 w-auto z-40"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-8 font-ca-slalom">
        {navigationsLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
