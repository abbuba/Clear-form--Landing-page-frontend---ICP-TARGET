import "./css/style.css";

import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://clearform.in"),
  title: {
    template: "%s | Clearform",
    default: "Clearform | Turn user feedback into clear product decisions",
  },
  description:
    "Clearform improves response quality at the source, delivering structured, decision-ready feedback for AI product teams. Run a $50 pilot — three months of included access.",
  keywords: [
    "AI feedback",
    "structured feedback",
    "AI product analytics",
    "form analytics",
    "feedback signal",
    "clearform",
  ],
  openGraph: {
    type: "website",
    title: "Clearform | Turn user feedback into clear product decisions",
    description:
      "Most AI teams collect feedback. Few can use it. Clearform improves response quality at the source. Run a $50 pilot.",
    siteName: "Clearform",
    locale: "en_US",
    images: [
      {
        url: "/images/logowname.png",
        width: 1200,
        height: 630,
        alt: "Clearform — Turn user feedback into clear product decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clearform | Turn user feedback into clear product decisions",
    description:
      "Most AI teams collect feedback. Few can use it. Clearform improves response quality at the source.",
    images: ["/images/logowname.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
  other: {
    "facebook-domain-verification": "n6fpdrbu601cwozfqo1kcn593j28lt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} bg-gray-50 font-sans tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
