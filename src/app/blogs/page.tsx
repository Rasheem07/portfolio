import React from 'react';
import BlogCard from '@/components/BlogCard';
import crypto from 'crypto';

const blogs = [
  {
    id: crypto.randomUUID(),
    title: "Example Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias rerum rem, eum facere minima omnis, mollitia magni qui quos animi esse nesciunt non. Ex vel ea enim? Mollitia impedit asperiores ex ducimus nihil autem minima, assumenda corrupti recusandae aperiam illo similique obcaecati. Dolore commodi eaque tempora laboriosam qui sunt?",
  },
  {
    id: crypto.randomUUID(),
    title: "Example Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias rerum rem, eum facere minima omnis, mollitia magni qui quos animi esse nesciunt non. Ex vel ea enim? Mollitia impedit asperiores ex ducimus nihil autem minima, assumenda corrupti recusandae aperiam illo similique obcaecati. Dolore commodi eaque tempora laboriosam qui sunt?",
  },
  {
    id: crypto.randomUUID(),
    title: "Example Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias rerum rem, eum facere minima omnis, mollitia magni qui quos animi esse nesciunt non. Ex vel ea enim? Mollitia impedit asperiores ex ducimus nihil autem minima, assumenda corrupti recusandae aperiam illo similique obcaecati. Dolore commodi eaque tempora laboriosam qui sunt?",
  },
  {
    id: crypto.randomUUID(),
    title: "Example Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias rerum rem, eum facere minima omnis, mollitia magni qui quos animi esse nesciunt non. Ex vel ea enim? Mollitia impedit asperiores ex ducimus nihil autem minima, assumenda corrupti recusandae aperiam illo similique obcaecati. Dolore commodi eaque tempora laboriosam qui sunt?",
  },
  {
    id: crypto.randomUUID(),
    title: "Example Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias rerum rem, eum facere minima omnis, mollitia magni qui quos animi esse nesciunt non. Ex vel ea enim? Mollitia impedit asperiores ex ducimus nihil autem minima, assumenda corrupti recusandae aperiam illo similique obcaecati. Dolore commodi eaque tempora laboriosam qui sunt?",
  },
];

export default function Page() {
  return (
    <section className="bg-gray-100 py-8 md:py-12 px-3 md:px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
        <div className="flex flex-col gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} slug={blog.id} description={blog.description} imageUrl='dashboard-preview.jpg'/>
          ))}
        </div>
      </div>
    </section>
  );
}
