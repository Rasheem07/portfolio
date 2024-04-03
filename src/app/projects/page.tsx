import React from 'react';
import ProjectCard from '@/components/projectCard';

const ProjectSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Swiggy Clone"
            description="Full-stack web app with MERN stack for food delivery. Includes authentication and order processing."
            imageUrl="/swiggy-preview.png"
            projectUrl="/projects/swiggy-clone"
            codeURL='https://github.com/Rasheem07/swiggy-clone'
          />
          <ProjectCard
            title="FinEase - Financial Dashboard"
            description="Next.js and Tailwind CSS-powered dashboard for financial management. Track balances and set goals."
            imageUrl="/financial-app-preview.png"
            projectUrl="/projects/finease"
            codeURL='https://github.com/Rasheem07/FinEase'
          />
          <ProjectCard
            title="Talkie PDF - ChatPDF Web App"
            description="Full-stack web app with tRPC and React Query. Chat interface for PDF interactions, including cloud storage."
            imageUrl="/dashboard-preview.jpg"
            projectUrl="/projects/talkie-pdf"
            codeURL='https://github.com/Rasheem07/scriptify'
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
