import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import colors from "tailwindcss/colors";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://v2.toastify.tk"),
  title: "ToastedToast",
  description: "frontend & discord bot developer",
  themeColor: colors.orange[500],
  twitter: {
    card: "summary",
    creator: "@ToastedDev",
    creatorId: "1145171094556426240",
  },
  openGraph: {
    type: "website",
    url: "/",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container py-8 text-[.9rem]">
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
