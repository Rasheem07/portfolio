import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, slug }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 flex-1">
        <div className="font-bold text-xl mb-2">
          <Link href={`/blogs/${slug}`}>
            <p>{title}</p>
          </Link>
        </div>
        <p className="text-gray-700 text-base sm-truncate md-truncate">{description}</p>
        <div className="mt-4">
          <Link href={`/blogs/${slug}`}>
            <p className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full">Read more</p>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="relative h-32 w-32 md:h-48 md:w-48">
          <Image
            src={`/${imageUrl}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
