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
import { useUser } from "@clerk/nextjs";

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
      "I'm so glad I found this freelancer. They were dedicated, responsive, and delivered exactly what I needed for my project.",
    name: "Sarah Johnson",
    title: "Small Business Owner",
  },
  {
    id: 2,
    quote:
      "This freelancer went above and beyond to create a beautiful website for my startup. I highly recommend their services!",
    name: "Michael Anderson",
    title: "Entrepreneur",
  },
  {
    id: 3,
    quote:
      "Working with this freelancer was a pleasure. They were patient, understanding, and eager to help me achieve my goals within my budget.",
    name: "Emily Roberts",
    title: "Freelance Writer",
  },
];

export default function Home() {
  const user = useUser();

  const username = user.user?.fullName;

  const currentuseTheme = useTheme();

  return (
    <>
      <MaxWidthWrapper className="mt-16 md:mt-32 flex flex-col items-center">
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
              className={`font-bold ${
                currentuseTheme === "dark" ? "text-white" : "text-gray-700"
              } max-w-4xl text-4xl md:text-5xl lg:text-6xl`}
            >
              Hey there! I&apos;m{" "}
              <span className="text-blue-600">Rasheem.</span>
            </motion.h1>
            <motion.p
              variants={ParagraphVariant}
              initial="hidden"
              animate="enter"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className={`max-w-prose sm:text-lg font-semibold ${
                currentuseTheme === "dark" ? "text-white/85" : "text-zinc-700"
              } mt-3`}
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
                  className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr ${
                    currentuseTheme === "light"
                      ? "from-blue-400 to-zinc-300"
                      : "from-white/75 to-zinc-500"
                  } opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.125rem] rotate-[30deg]`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col mt-24 mb-14">
        <div className="mx-auto mt-32 mb-32 sm:mt-48 max-w-5xl">
          <div className="mb-12 px-6 sm:px-8">
            <div className="mx-auto max-w-3xl sm:text-center">
              <h1 className="mt-2 text-gray-900 font-bold text-5xl sm:text-6xl">
                Let&apos;s get started now!
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                get your website ready within the expected time!
              </p>
            </div>
          </div>
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  service 1
                </span>
                <span className="text-xl font-semibold">
                  Frontend development
                </span>
                <span className="mt-2 text-zinc-700">
                  deals with the looks of website.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  service 2
                </span>
                <span className="text-xl font-semibold">
                  Backend development
                </span>
                <span className="mt-2 text-zinc-700">
                  REST api&apos;s, database integration, Authentication and more
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  service 3
                </span>
                <span className="text-xl font-semibold">
                  full stack developement
                </span>
                <span className="mt-2 text-zinc-700">
                  typesafe, form management, emails...
                </span>
              </div>
            </li>
          </ol>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/financial-app-preview.png"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col mt-24 mb-14">
        <motion.h2
          variants={HeadingVariant}
          initial="hidden"
          animate="enter"
          transition={{ type: "easeInOut", duration: 0.5 }}
          className={`text-2xl font-bold pb-2 md:text-center ${
            currentuseTheme === "dark" ? "text-white" : "text-gray-900"
          } px-1`}
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
          className="flex flex-row flex-wrap gap-3 items-center w-full mt-4 z-30"
        >
          <BestWork
            imgURL="/dashboard-preview.jpg"
            title="TalkiePDF Web App"
            description="Introducing ChatPDF: Authenticate to securely upload and
            preview PDFs with advanced features like zoom, search, and
            pagination."
            stack="Nextjs, tailwindCSS, Prisma, tRPC..."
          />

          <BestWork
            imgURL="/financial-app-preview.png"
            title="Financial Management Web App"
            description="Introducing our sleek financial management app, empowering
                  users to effortlessly track balances, goals, expenses, and
                  transactions."
            stack=" React, Nextjs, Prisma, tailwindcss"
          />

          <BestWork
            className="max-w-xl"
            imgURL="/swiggy-preview.png"
            title="Swiggy Clone (end to end)"
            description="A full stack food delivery web app which authenticates users, explore different restaurants, cart and order food in bulk."
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
          className={`text-2xl font-bold capitalize ${
            currentuseTheme === "dark" ? "text-white" : "text-gray-900"
          } px-1 text-center`}
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
