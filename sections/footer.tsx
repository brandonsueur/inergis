import { project } from "@/constants";
import { footerConfig } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className=" bg-primary border-2 border-[#262626] rounded-lg px-12 pt-10 mb-2 mx-2 sm:mx-8 xl:mx-16 mt-14 sm:mb-10 flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between gap-8 flex-wrap">
        <div>
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Logo Inergis"
              width={140}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          <p className="mt-4 text-md text-white leading-relaxed max-w-md">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex items-center gap-4">
            {footerConfig.social?.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/socials/${social.icon}.svg`}
                  alt={`Logo Inergis ${social.label}`}
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>
        {footerConfig.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 min-w-[150px]">
            <h3 className="text-xl font-ca-slalom font-bold text-white mb-2">
              {section.title}
            </h3>

            {section.links.map((link, idx) => (
              <Link key={idx} href={link.href}>
                <span className="text-base font-light font-epilogue text-md text-white leading-relaxed hover:text-white transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="pt-6 pb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-ca-slalom text-white text-sm">
          © {new Date().getFullYear()} {project.siteName}. Tous droits réservés.
          Développé par{" "}
          <Link href="https://www.hulli.studio">Hulli Studio</Link>.
        </p>
      </div>
    </footer>
  );
};
