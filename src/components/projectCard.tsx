import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  codeURL: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, codeURL }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden border border-zinc-200">
      <div className="relative h-56 w-full shadow-inner">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-center object-cover"
        />
      </div>
      <div className="p-6">
        <div className="font-semibold text-lg mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center gap-3">
        <Link href={projectUrl}>
          <p className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
            View Project
          </p>
        </Link>
        <Link href={codeURL} target='_blank'>
          <p className="inline-block text-purple-700 hover:bg-purple-200 px-4 py-2 rounded-lg transition duration-300">
            View code
          </p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
