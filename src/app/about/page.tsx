"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import VeiwAll from "@/components/VeiwAll";
import Certificate from "@/components/certificate";
import React, { useState } from "react";

type Props = {};

export default function Page({}: Props) {

  return (
    <MaxWidthWrapper className="flex flex-col items-start mt-8 sm:mt-16 px-2.5 md:px-10 mb-12">
      <div className="mx-auto space-y-8 sm:space-y-10">
        <section className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-900">About me</h2>
          <div className="flex flex-col space-y-4">
            <p className="text-lg text-zinc-900 max-w-6xl mt-2">
              Welcome! I&apos;m a passionate web developer with a self-driven journey
              spanning nearly two years. My coding voyage began with online
              courses from platforms like YouTube and Coursera, igniting a
              passion that&apos;s kept me dedicated and consistent ever since.
              Through hands-on projects and community collaboration, I&apos;ve delved
              into various tech stacks and libraries, honing my skills in
              crafting high-quality, performance-based websites.
            </p>
            <p className="text-lg text-zinc-900 max-w-6xl mt-2">
              Driven by a love for clean code and responsive design, I
              specialize in delivering premium-grade sites at minimal costs.
              Currently pursuing my BCA degree, I&apos;m eager to continue my growth
              while providing top-notch solutions that exceed expectations. Join
              me as we turn ideas into reality, one line of code at a time.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-start justify-between">
          <h2 className="text-2xl text-gray-900 font-bold">
            Technology Stacks:
          </h2>
          <div className="flex flex-col my-4 space-y-2">
            <div className="flex flex-row space-x-1 sm:items-center">
              <h3 className="text-lg font-semibold text-blue-600">MERN:</h3>
              <p className="text-[16px] leading-6 font-medium">
                React, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS,
                Redux
              </p>
            </div>
            <div className="flex flex-row space-x-1 sm:items-center">
              <h3 className="text-lg font-semibold text-blue-600">T3:</h3>
              <p className="text-[16px] leading-6 font-medium">
                Next.js, TypeScript, tRPC, React Query, Prisma, Tailwind CSS,
                Redux, React Hook Form, Shadcn-ui
              </p>
            </div>
            <div className="flex flex-row items-center space-x-1 sm:items-center">
              <h3 className="text-lg font-semibold text-blue-600">Others:</h3>
              <p className="text-[16px] leading-6 font-medium">
                Git, GitHub, Vercel, SaaS
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl text-gray-900 font-bold">Education</h2>
          <div className="flex flex-col space-y-2">
            <p className="text-lg text-zinc-900 max-w-6xl mt-2">
              I am currently pursuing my Bachelor of Computer Applications (BCA)
              degree, specializing in Artificial Intelligence, Machine Learning,
              Robotics, and IoT. While I am in my first year of BCA studies, my
              journey with coding began back in my 11th grade. Alongside my
              academic pursuits, I have also undertaken additional courses on
              platforms like Coursera.
            </p>
            <p className="text-lg text-zinc-900 max-w-6xl mt-2">
              Scheduled to graduate in 2027, I am eagerly seeking opportunities
              to delve deeper into advanced and intricate concepts within the
              realm of technology. Currently enrolled at (college name), I am
              actively exploring the prospect of assembling a dedicated team to
              collaborate on innovative projects and further enrich our
              collective learning experience.
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl text-gray-900 font-bold">
            Achievements and Awards
          </h2>
          <div className="scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded flex flex-row items-center gap-4 max-w-6xl overflow-x-scroll transition">
            <Certificate imgURL="/intro front end certifcate.jpeg" />
            
            <VeiwAll />
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
