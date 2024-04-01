"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { NotebookIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center mt-40 mb-80 pb-20">
      <div className="flex flex-col justify-center items-center mx-auto">
        <NotebookIcon />
        <h2 className="text-xl font-semibold text-zinc-900">Page not found!</h2>
        <button type="button" onClick={() => router.back()} className="text-blue-500 font-medium mt-2">
          Click here to go back
        </button>
      </div>
    </MaxWidthWrapper>
  );
}
