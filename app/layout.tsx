import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Quick Waitlist";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Quick Waitlist and coming soon page for your SAAS and website.";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA] text-slate-900 antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
