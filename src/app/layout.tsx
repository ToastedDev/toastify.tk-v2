import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import colors from "tailwindcss/colors";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={ubuntuMono.className}>
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
