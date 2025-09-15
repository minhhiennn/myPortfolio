import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.dev";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-15-starter";
export const PRO_VERSION = "https://nexty.dev";

const EMAIL_URL = 'minhhien2000k@gmail.com'
const GITHUB_URL = 'https://github.com/minhhiennn'
const LINKEDIN_URL = 'https://www.linkedin.com/in/hien-minh-062443265/'
const FACEBOOK_URL = 'https://www.facebook.com/minh.hien.687325'

export const siteConfig: SiteConfig = {
  name: "Next Forge",
  tagLine: 'Multilingual Next.js 15 Starter',
  description:
    "A multilingual Next.js 15 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.",
  url: BASE_URL,
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  socialLinks: {
    linkedin: LINKEDIN_URL,
    facebook: FACEBOOK_URL,
    github: GITHUB_URL,
    email: EMAIL_URL
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
