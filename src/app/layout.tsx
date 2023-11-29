import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Ubuntu_Mono } from "next/font/google";
import colors from "tailwindcss/colors";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://v2.toastify.tk"),
  title: "ToastedToast",
  description: "frontend & discord bot developer",
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

export const viewport: Viewport = {
  themeColor: colors.orange[500],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark [color-scheme:dark]", ubuntuMono.className)}
    >
      <body className="container py-8 text-[.9rem]">
        <main>{children}</main>
      </body>
    </html>
  );
}
