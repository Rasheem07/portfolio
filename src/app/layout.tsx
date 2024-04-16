import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../components/providers/storeProvider";
import Main from "./main";
import TrpcProvider from "@/components/providers/trpcProviders";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <TrpcProvider>
          <ClerkProvider>
            <Main>
              {children}
              <Analytics />
              <SpeedInsights />
            </Main>
          </ClerkProvider>
        </TrpcProvider>
      </StoreProvider>
    </html>
  );
}
