import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dummyblog.com"),
  title: {
    default: "Dummy Blog",
    template: `%s | Dummy blog`,
  },
  openGraph:{
    images:["https://dummyimage.com/1100x630/000/bbb.png"]
  },
  description: "This is the description of dummy blog",
  verification: {
    google: "google-site-verification=878787878",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
