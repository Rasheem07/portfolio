'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { useTheme } from "@/lib/reduxSelectors";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Main({children}: Props) {
    const currentuseTheme = useTheme();
    const router = usePathname();

  return (
    <body
      className={cn(
        `font-sans antialiased ${
          currentuseTheme === "light" ? "grainy" : "dark"
        } min-w-[100vw] min-h-screen m-0 p-0 overflow-x-hidden transition-colors max-w-[100vw]`
      )}
    >
      {router !== '/sign-up' && router !== '/sign-in' &&
      <Navbar />
      }
      {children}
      <Footer />
    </body>
  );
}
