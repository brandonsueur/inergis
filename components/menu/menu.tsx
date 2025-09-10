"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationsLinks } from "@/constants";
import { Button } from "../button";
import { Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 mt-12 md:mt-9 ${
        scrolled ? "bg-white shadow-md py-2" : "py-4"
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-blue.svg"
            alt="Logo Inergis"
            width={180}
            height={49}
            className="h-10 w-auto z-40"
          />
        </Link>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-8 font-ca-slalom">
          {navigationsLinks.map((link) => {
            if (link.href === "/rendez-vous") {
              return (
                <Link key={link.href} href={link.href}>
                  <Button>{link.label}</Button>
                </Link>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bouton du menu mobile */}
        <button
          className="md:hidden flex items-center z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <MenuIcon size={24} className="text-primary" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navigationsLinks.map((link) => {
                if (link.href === "/rendez-vous") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button className="w-full">{link.label}</Button>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-primary text-xl font-medium hover:text-blue-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
