import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { FooterLink } from "@/types/common";
import { GithubIcon, MailIcon } from "lucide-react";
import { getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";
import { SiFacebook, SiLinkedin } from "react-icons/si";

export default async function Footer() {
  const messages = await getMessages();

  const t = await getTranslations("Home");
  const tFooter = await getTranslations("Footer");

  const footerLinks: FooterLink[] = tFooter.raw("Links.groups");
  footerLinks.forEach((group) => {
    const pricingLink = group.links.find((link) => link.id === "pricing");
    if (pricingLink) {
      pricingLink.href = process.env.NEXT_PUBLIC_PRICING_PATH!;
    }
  });

  return (
    <div className="bg-gray-900 text-gray-300">
      <footer className="py-2 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="w-full text-center">
              <p>{tFooter("MadeWithLove")}</p>
              <div className="flex justify-center items-center gap-2 pt-4">
                {siteConfig.socialLinks?.github && (
                  <Link
                    href={siteConfig.socialLinks.github}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="GitHub"
                    title="View on GitHub"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <GithubIcon className="size-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.facebook && (
                  <Link
                    href={siteConfig.socialLinks.facebook}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Discord"
                    title="Join Discord"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <SiFacebook className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.linkedin && (
                  <Link
                    href={siteConfig.socialLinks.linkedin}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Twitter"
                    title="View on Twitter"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <SiLinkedin className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.email && (
                  <Link
                    href={`mailto:${siteConfig.socialLinks.email}`}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Email"
                    title="Email"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <MailIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {tFooter("Copyright", {
                year: new Date().getFullYear(),
                name: siteConfig.name,
              })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <I18nLink
                href="/privacy-policy"
                title={tFooter("PrivacyPolicy")}
                prefetch={false}
                className="text-gray-400 hover:text-white text-sm"
              >
                {tFooter("PrivacyPolicy")}
              </I18nLink>
              <I18nLink
                href="/terms-of-service"
                title={tFooter("TermsOfService")}
                prefetch={false}
                className="text-gray-400 hover:text-white text-sm"
              >
                {tFooter("TermsOfService")}
              </I18nLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
