import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dobi Akasia",
    default: "Laundry & Dry Cleaning Services | Dobi Akasia",
  },
  description: "Dobi Akasia is Malaysia's tech-driven laundry and dry cleaning provider. We blend our rich experience with innovative green cleaning technology.",
  keywords: ["laundry", "dry cleaning", "dobi", "dobi akasia", "curtain cleaning", "carpet cleaning", "malaysia laundry"],
  openGraph: {
    title: "Laundry & Dry Cleaning Services | Dobi Akasia",
    description: "Dobi Akasia is Malaysia's tech-driven laundry and dry cleaning provider. We blend our rich experience with innovative green cleaning technology.",
    url: "https://mrclean.my/en/", // Replicating structural URL context
    siteName: "Dobi Akasia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
