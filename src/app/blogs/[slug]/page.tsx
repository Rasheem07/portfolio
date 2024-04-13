"use client";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify"; // for sanitizing HTML (optional)
import { trpc } from "@/app/_trpc/trpcClient";

const Article = () => {
  let id;
  typeof window !== "undefined"? id = localStorage.getItem("id") as string : null
  const { data } = trpc.getArticle.useQuery({ id: id! });

  let sanitizedContent = DOMPurify.sanitize(data?.article.content!);

  return (
    <div className="min-h-screen p-5">
      <h2 className="text-2xl font-semibold text-gray-900 capitalize px-0.5 mb-2">
        {data?.article.title}
      </h2>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
      {/* Render HTML content using dangerouslySetInnerHTML */}
    </div>
  );
};

export default Article;
