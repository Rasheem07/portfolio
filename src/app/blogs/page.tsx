'use client'
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { trpc } from "../_trpc/trpcClient";

export default function Page() {

  type article = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAat: string;
    adminId: string;
  }[]

  const [blogs, setblogs] = useState<article>([]);

  const { data } = trpc.getArticles.useQuery();

  useEffect(() => {
    setblogs(data?.articles!)
  }, [data]);

  const handleBlog = (id: string) => {
    localStorage.setItem('id', id);
  }

  return (
    <section className="bg-gray-100 py-8 md:py-12 px-3 md:px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col gap-8">
          {blogs && blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.id}
              description={blog.content.slice(0, 250)}
              imageUrl="dashboard-preview.jpg"
              onClick={() => handleBlog(blog.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
