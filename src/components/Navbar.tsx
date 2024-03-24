'use client'
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Lamp, MoonIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux";
import { dark, light } from "@/actions/theme";
import { useTheme } from "@/lib/reduxSelectors";

type Props = {};

export default function Navbar({}: Props) {

    const dispatch = useDispatch();

    const currentuseTheme = useSelector((state: RootState) => state.theme)

    const handleuseTheme = () => {
       if(currentuseTheme === "light"){
          dispatch(dark())
       }else if(currentuseTheme === "dark"){
          dispatch(light())
       }
    }
    
    const location = usePathname();

  return (
    <nav className={`sticky top-0 inset-x-0 h-14 w-full border-gray-200 ${useTheme() === "dark"? 'bg-[rgba(26,26,26, .75)] border-none'  : 'bg-white/75 border-b'} transition-all backdrop-blur-lg z-40`}>
      <MaxWidthWrapper>
        <div className={`flex flex-row h-14 justify-between items-center ${useTheme() === 'dark'? 'border-none': 'border-b'} border-zinc-200`}>
          <Link
            href="/"
            className="font-semibold tracking-normal capitalize z-40"
          >
            Rasheem&apos;s portfolio
          </Link>
          <div className="sm:flex items-center space-x-4 hidden">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                location === "/"? 'font-semibold text-blue-700' : '' 
              )}
              aria-label="home page"
            >
              home
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                location === "/about"? 'font-semibold text-blue-700' : '' 
              )}
              aria-label="about page"
            >
              about
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                location === "/projects"? 'font-semibold text-blue-700' : '' 
              )}
              aria-label="projects page"
            >
              projects
            </Link>
            <Link
              href="/skills"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                location === "/skills"? 'font-semibold text-blue-700' : '' 
              )}
              aria-label="skills page"
            >
              skills
            </Link>
            <Link
              href="/blogs"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                location === "/blogs"? 'font-semibold text-blue-700' : '' 
              )}
              aria-label="blogs page"
            >
              blogs
            </Link>
          <div className={`flex items-center justify-center h-8 w-8 ${currentuseTheme === "dark"? 'bg-white' : 'bg-dark'} p-[2px] text-white rounded-full transition-all shadow-md hover:shadow-lg ${currentuseTheme === "dark"? 'border border-zinc-400': ''}`} onClick={handleuseTheme}>
          {currentuseTheme !== 'light'? 
            <Lamp className="h-3/4 w-3/4 aspect-square text-gray-900"/> : <MoonIcon className="h-3/4 w-3/4 aspect-square text-white"/>
          }
          </div>
          </div>

        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
