"use client";
import BestWork from "@/components/BestWork";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SkillsCard from "@/components/SkillsCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/moving-card";
import { useTheme } from "@/lib/reduxSelectors";
import { trpc } from "./_trpc/trpcClient";

const variants = {
  hidden: { opacity: 0, x: 0, y: -150 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const cardsVariant = {
  hidden: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const HeadingVariant = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const ParagraphVariant = {
  hidden: { y: -5, x: -10, opacity: 0 },
  enter: { y: 0, x: 0, opacity: 1 },
};

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis corrupti a debitis aliquam vitae delectus porro, sit architecto, cupiditate numquam minus possimus quae.",
    name: "rasheem&apos;s client",
    title: "high quality website!",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis corrupti a debitis aliquam vitae delectus porro, sit architecto, cupiditate numquam minus possimus quae.",
    name: "rasheem&apos;s client",
    title: "high quality website!",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis corrupti a debitis aliquam vitae delectus porro, sit architecto, cupiditate numquam minus possimus quae.",
    name: "rasheem&apos;s client",
    title: "high quality website!",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis corrupti a debitis aliquam vitae delectus porro, sit architecto, cupiditate numquam minus possimus quae.",
    name: "rasheem&apos;s client",
    title: "high quality website!",
  },
  {
    id: 5,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis corrupti a debitis aliquam vitae delectus porro, sit architecto, cupiditate numquam minus possimus quae.",
    name: "rasheem&apos;s client",
    title: "high quality website!",
  },
];


export default function Home() {

  const currentuseTheme = useTheme();

  return (
    <>
      <MaxWidthWrapper className="mt-16 md:mt-24 flex flex-col items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: "fade-in-up", duration: 0.5 }}
        >
          <div className="flex flex-col h-full w-full max-w-fit px-4 sm:px-0">
            <motion.h1
              variants={HeadingVariant}
              initial="hidden"
              animate="enter"
              transition={{
                type: "spring",
                duration: 0.5,
                damping: 20,
                stiffness: 100,
              }}
              className={`font-bold ${currentuseTheme === 'dark'? 'text-white' : 'text-gray-700'} max-w-4xl text-4xl md:text-5xl lg:text-6xl`}
            >
              Hey there! I&apos;m <span className="text-blue-600">Rasheem.</span>
            </motion.h1>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className={`max-w-prose sm:text-lg font-semibold ${currentuseTheme === 'dark'?'text-white/85':'text-zinc-700'} mt-3`}
            >
              A <span className="text-blue-600">web developer</span> with 2
              years of coding experience across different tech stacks like MERN
              and Next.js. Passionate about coding, I turn colorful designs into
              reality and deliver high-quality, high-speed service.
            </motion.p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({
                  size: "sm",
                }),
                "mt-5 max-w-[120px] sm:mx-auto"
              )}
            >
              Let&apos;s Connect
            </Link>
          </div>
          <div>
            <div className="relative isolate -z-10">
              <div
                aria-hidden="true"
                className="absolute -top-40 inset-x-0 sm:-top-80 transform-gpu blur-3xl -z-10 pointer-events-none"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr ${currentuseTheme === 'light'? 'from-blue-400 to-zinc-300' : 'from-white/75 to-zinc-500' } opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.125rem] rotate-[30deg]`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col mt-24 mb-14">
        <motion.h2
          variants={HeadingVariant}
          initial="hidden"
          animate="enter"
          transition={{ type: "ease" }}
          className={`text-2xl font-bold ${currentuseTheme === "dark"?'text-white' : 'text-gray-900'} px-1`}
        >
          Services Offered
        </motion.h2>
        <motion.div
          variants={cardsVariant}
          initial="hidden"
          animate="enter"
          className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-between w-full mt-4"
        >
          <div className={`flex flex-col gap-4 ${currentuseTheme === "light" ? 'bg-white' : 'bg-white/95'} shadow-md hover:shadow-lg rounded-md min-h-64 min-w-64 py-4 px-6`}>
            <h3 className="text-xl font-semibold text-gray-800">
              Frontend Development
            </h3>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-[16px] leading-6 font-medium text-zinc-700"
            >
              <span className="font-semibold text-blue-500">Description: </span>
              Crafting high-performance interfaces with React and Next.js, using
              modern libraries like React Query for seamless data fetching.
              Ensuring responsiveness and speed across devices for exceptional
              user experiences.
            </motion.p>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-sm font-medium text-gray-600"
            >
              <span className="font-semibold underline underline-offset-2">
                Key Features:
              </span>{" "}
              Responsive Web Design, User InterFace Design, Performance
              Optimisation and more
            </motion.p>
          </div>
          <div className={`flex flex-col ${currentuseTheme === "light" ? 'bg-white' : 'bg-white/95'} shadow-md hover:shadow-lg rounded-md min-h-64 min-w-64 px-6 py-4 gap-4`}>
            <h3 className="text-xl font-semibold text-gray-800">
              Backend Development
            </h3>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-[16px] leading-6 font-medium text-zinc-700"
            >
              <span className="font-semibold text-blue-500">Description: </span>
              Crafting scalable Express.js backend solutions for MERN stack
              apps. Utilizing tRPC and Prisma for efficient Next.js projects.
              Seamlessly integrating authentication and real-time updates for
              reliability and efficiency.
            </motion.p>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-sm font-medium text-gray-600"
            >
              <span className="font-semibold underline underline-offset-2">
                Key Features:
              </span>{" "}
              Backend Frameworks, RESTful API, Authentication and Authorization
              and more
            </motion.p>
          </div>
          <div className={`flex flex-col ${currentuseTheme === "light" ? 'bg-white' : 'bg-white/95'} shadow-md hover:shadow-lg rounded-md min-h-64 min-w-64 px-6 py-4 gap-4`}>
            <h3 className="text-xl font-semibold text-gray-800">
              Full stack Development(T3)
            </h3>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-[16px] leading-6 font-medium text-zinc-700"
            >
              <span className="font-semibold text-blue-500">Description: </span>
              Crafting high-performance web apps with Next.js, TypeScript, and
              modern libraries like tRPC and Prisma. Seamlessly integrating
              responsive design, efficient data management, and robust
              validation.
            </motion.p>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-sm font-medium text-gray-600"
            >
              <span className="font-semibold underline underline-offset-2">
                Key Features:
              </span>
              Responsive Web Design, User Interface Design, Performance
              Optimization, typesafe and more
            </motion.p>
          </div>
        </motion.div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col mt-24 mb-14">
        <motion.h2
          variants={HeadingVariant}
          initial="hidden"
          animate="enter"
          transition={{ type: "easeInOut", duration: 0.5 }}
          className={`text-2xl font-bold ${currentuseTheme === "dark"?'text-white' : 'text-gray-900'} px-1`}
        >
          Best Works
        </motion.h2>
        <motion.div
          variants={cardsVariant}
          initial="hidden"
          animate="enter"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            staggerChildren: 0.1,
          }}
          className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between w-full mt-4 z-30"
        >

          <BestWork
          className="md:col-span-2"
            imgURL="/dashboard-preview.jpg"
            title="TalkiePDF Web App"
            description="Introducing ChatPDF: Authenticate to securely upload and
            preview PDFs with advanced features like zoom, search, and
            pagination. Seamlessly chat while previewing documents,
            ensuring optimal performance for a streamlined user
            experience."
            stack="Nextjs, tailwindCSS, Prisma, tRPC, react-hook-form, react-query, zod"
          />

          <BestWork
            imgURL="/financial-app-preview.png"
            title="Financial Management Web App"
            description="Introducing our sleek financial management app, empowering
                  users to effortlessly track balances, goals, expenses, and
                  transactions. Seamlessly manage bills and subscriptions while
                  maintaining multiple virtual accounts for optimal control."
            stack=" React, Nextjs, Prisma, tailwindcss"
          />


          <BestWork
            imgURL="/swiggy-preview.png"
            title="Swiggy Clone (end to end)"
            description=" Introducing our MERN stack Swiggy clone: Authenticate to enjoy
            seamless food ordering with real-time tracking and payment
            integration. Optimize performance for an efficient platform,
            ensuring a smooth user experience throughout."
            stack="Reactjs, tailwindCSS, Expressjs, MongoDB"
          />
        </motion.div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col mt-24 mb-14">
        <motion.h2
          variants={HeadingVariant}
          initial="hidden"
          animate="enter"
          transition={{ type: "ease" }}
          className={`text-2xl font-bold capitalize ${currentuseTheme === "dark" ? 'text-white' :'text-gray-900'} px-1 text-center`}
        >
          client testimonials
        </motion.h2>
        <InfiniteMovingCards
          key={JSON.stringify(crypto.randomUUID)}
          items={testimonials}
          speed="normal"
          direction="right"
        />
      </MaxWidthWrapper>
    </>
  );
}
