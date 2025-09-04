"use client";

import Image from "next/image";
import Link from "next/link";
import { navigationsLinks } from "@/constants";
import { Button } from "../button";

export const Menu = () => {
  return (
    <header className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-8 mb-4">
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
        {navigationsLinks.map((link) => {
          if (link.href == "/devis") {
            return (
              <Button
                key={link.href}
                onClick={() => {
                  // Handle button click
                }}
              >
                {link.label}
              </Button>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary transition-colors"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
