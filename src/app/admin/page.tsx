"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { CodeIcon, Router } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useOptimistic, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaTwitter, FaGithub, FaReddit } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { trpc } from "../_trpc/trpcClient";

type Props = {};

export default function Page({}: Props) {

  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem('isAdmin')){
      router.push('/admin/login')
    }
  }, [])

  const personalInfoValidator = z.object({
    info: z
      .string()
      .min(300)
  });

  type personalInfoType = z.infer<typeof personalInfoValidator>;

  const {watch, register, handleSubmit, formState: {errors} } = useForm<personalInfoType>({
    resolver: zodResolver(personalInfoValidator)
  });

  const [isProfileEdit, setisProfileEdit] = useState(false);

  const profile = watch("info", "hello this is rasheem");
  const profileLength = profile.length;


  const handleEditProfile = () => {
    if (isProfileEdit) {
      handleSubmit(profileSubmit)();
      setisProfileEdit(false);
    } else {
      setisProfileEdit(true);
    }
  };

  const profileSubmit = (data: any) => {
    
  };

  return (
    <MaxWidthWrapper className="mt-6 md:mt-12 gap-6 min-h-[88vh]">
      <div className="py-4 px-2 flex items-center justify-between border-b border-zinc-300 w-full">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col">
            <h2 className="text-xl text-gray-900 font-semibold">
              Mohammed Rasheem
            </h2>
            <p className="text-[16px] leading-6 text-zinc-700 font-medium">
              Web developer || designer
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-zinc-400 shadow-md text-white py-1 px-4">
            Delete Admin
          </button>
          <button className="bg-blue-500 rounded-md offset-none focus:ring ring-blue-400 shadow-md text-white py-1 px-4">
            Edit details
          </button>
        </div>
      </div>
      {/* Main Content Sections */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold select-none">Introduction</h3>
            <button
              onClick={handleEditProfile}
              disabled={profileLength >= 300 || profileLength <= 0}
              className={`${
                !isProfileEdit
                  ? "bg-zinc-500 ring-zinc-400"
                  : `bg-green-500 ring-green-400 select-none ${profileLength >= 300 || profileLength <= 0? 'bg-green-500/75': 'bg-green-500'}`
              } cursor-pointer rounded-md offset-none focus:ring ring-zinc-400 shadow-inner text-white py-1 px-4`}
            >
              {isProfileEdit ? "Save changes" : "Edit details"}
            </button>
          </div>
          <div>
            <p>
              {isProfileEdit ? (
                <TextareaAutosize
                  autoFocus
                  maxRows={8}
                  className={cn(errors.info || profileLength >= 300 && 'border focus-visible:border-red-500 rounded-md' ,`border-[#fff] p-1 min-h-20 outline-none w-full scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded`)}
                  {...register("info")}
                  defaultValue={profile}
                  onKeyDown={(e) => {
                    if (profileLength >= 300 && e.key !== 'Backspace' && e.key !== 'Delete') {
                      e.preventDefault();
                    }
                    if (e.key === "enter") {
                      handleSubmit(profileSubmit)();
                    }
                  }}
                />
              ) : (
                profile
              )}
            </p>
          </div>
          {isProfileEdit && <span className="float-right pr-4 text-sm text-zinc-700">{profileLength}/300</span>}
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Projects</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Add your projects content here */}
          <ul className="space-y-4 overflow-y-auto scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded">
            {/* Project 1 */}
            <li>
              <h4 className="text-base font-semibold">TalkiPDF Web App</h4>
              <p className="text-sm text-gray-600">
                allows to chat with your PDF file.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Technologies:</span>
                <span className="text-xs text-gray-500">
                  React.js, next.js, prisma, tailwindcss, tRPC
                </span>
              </div>
              <Link
                href={`/projects/talkiepdf`}
                className="text-blue-500 text-sm hover:underline"
              >
                View Project
              </Link>
            </li>

            {/* Project 2 */}
            <li>
              <h4 className="text-base font-semibold">FinEase Web App</h4>
              <p className="text-sm text-gray-600">
                manage your money with ease.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Technologies:</span>
                <span className="text-xs text-gray-500">
                  nextjs, prisma, typescript, tailwindcss
                </span>
              </div>
              <Link
                href={`/projects/finease`}
                className="text-blue-500 text-sm hover:underline"
              >
                View Project
              </Link>
            </li>

            {/* Add more projects as needed */}
          </ul>
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Blog Posts</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Add your blog posts content here */}
          <ul className="space-y-4">
            {/* Blog Post 1 */}
            <li>
              <h4 className="text-base font-semibold">Blog Post 1 Title</h4>
              <p className="text-sm text-gray-600">
                Published on April 1, 2022
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies nulla nec urna fermentum, et laoreet dui consectetur.
              </p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Read More
              </a>
            </li>

            {/* Blog Post 2 */}
            <li>
              <h4 className="text-base font-semibold">Blog Post 2 Title</h4>
              <p className="text-sm text-gray-600">
                Published on March 15, 2022
              </p>
              <p className="text-sm text-gray-600">
                Sed eu felis id orci consequat tristique. Nam nec aliquam odio,
                at tincidunt tortor.
              </p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Read More
              </a>
            </li>

            {/* Add more blog posts as needed */}
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-md p-6 shadow-md col-span-2">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Testimonials</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Testimonial 1 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-gray-700">
                &quot;Mohammed is an exceptional web developer. He delivered our
                project on time and exceeded our expectations.&quot;
              </p>
              <p className="text-gray-600">- John Doe, CEO of Company XYZ</p>
            </div>
            {/* Testimonial 2 */}
            <div>
              <p className="text-gray-700">
                &quot;I highly recommend Mohammed for any web development
                project. His attention to detail and problem-solving skills are
                top-notch.&quot;
              </p>
              <p className="text-gray-600">- Jane Smith, Founder of ABC Inc.</p>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Education 1 */}
          <div>
            <h4 className="text-base font-semibold">
              Bachelor&apos;s in Computer Science
            </h4>
            <p className="text-sm text-gray-600">University of ABC</p>
            <p className="text-sm text-gray-600">Graduated in 2020</p>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              View Certificate
            </a>
          </div>
          {/* Add more education details as needed */}
        </div>

        {/* Stacks Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Stacks</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Stacks content here */}
          <ul className="list-disc pl-5">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            {/* Add more stacks as needed */}
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Achievement 1 */}
          <div>
            <h4 className="text-base font-semibold">
              Frontend Developer Certification
            </h4>
            <p className="text-sm text-gray-600">Issued by XYZ Organization</p>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              View Certificate
            </a>
          </div>
          {/* Add more achievements as needed */}
        </div>
        {/* Contact Section */}
        <div className="bg-white rounded-md p-6 shadow-md">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <button className="bg-zinc-500 rounded-md offset-none focus:ring ring-blue-400 shadow-inner text-white py-1 px-4">
              Edit details
            </button>
          </div>
          {/* Add your contact form or details here */}
          <div className="flex items-center space-x-4 mx-auto">
            {/* Social Icon: LinkedIn */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 text-purple-900" />
            </a>
            {/* Social Icon: Twitter */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 text-blue-500" />
            </a>
            {/* Social Icon: GitHub */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 text-blue-600" />
            </a>
            {/* Social Icon: Email */}
            <a href="mailto:example@example.com">
              <FaReddit className="h-6 w-6 text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
