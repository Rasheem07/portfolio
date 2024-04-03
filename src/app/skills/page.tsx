import React from 'react';
import TechSkillCard from '@/components/skillCard'; // Make sure to import the TechSkillCard component

const TechSkillsPage = () => {
  return (
    <div className="container mx-auto px-3 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-6">Tech Skills</h1>

      {/* Basics Section */}
        <h2 className="text-2xl font-semibold w-full mb-2">Basics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mb-6 gap-4">
        <TechSkillCard
          skillName="HTML5"
          skillDescription="Defines the structure of the Web Page"
          iconUrl="/icons/html5-icon.png"
        />
        <TechSkillCard
          skillName="CSS3"
          skillDescription="Used to style the html elemenets."
          iconUrl="/icons/css3-icon.png"
        />
        <TechSkillCard
          skillName="JavaScript"
          skillDescription="Used to write the logic of the website."
          iconUrl="/icons/js6-icon.png"
        />
        <TechSkillCard
          skillName="TypeScript"
          skillDescription="Gives us type safe interface."
          iconUrl="/icons/TypeScript.png"
        />
      </div>

      {/* Frontend Section */}
        <h2 className="text-2xl font-semibold w-full mb-2">Frontend</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mb-6 gap-4">
        <TechSkillCard
          skillName="React.js"
          skillDescription="A javascript library for building UI's"
          iconUrl="/icons/reactjs.png"
        />
        <TechSkillCard
          skillName="nextjs.js"
          skillDescription="A react framework."
          iconUrl="/icons/nextjs.png"
        />
        <TechSkillCard
          skillName="Tailwind CSS"
          skillDescription="A Utility first CSS framework"
          iconUrl="/icons/Tailwind CSS.png"
        />
        <TechSkillCard
          skillName="Redux"
          skillDescription="A state management framework"
          iconUrl="/icons/redux.png"
        />
        <TechSkillCard
          skillName="React hook form"
          skillDescription="flexible form validation library."
          iconUrl="/icons/react-hook-form.png"
        />
        <TechSkillCard
          skillName="Framer motion"
          skillDescription=" Simplifies animation creation in React."
          iconUrl="/icons/framer motion.jpg"
        />
        <TechSkillCard
          skillName="Shadcn UI"
          skillDescription="A modern UI toolkit for web applications."
          iconUrl="/icons/shadcn-ui.png"
        />
        {/* Add more frontend frameworks/libraries as needed */}
      </div>

      {/* Backend Section */}
        <h2 className="text-2xl font-semibold w-full mb-2">Backend</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mb-6 gap-4">
        <TechSkillCard
          skillName="Node.js"
          skillDescription="Server-side JavaScript runtime"
          iconUrl="/icons/Node.js.png"
        />
        <TechSkillCard
          skillName="Express.js"
          skillDescription="A Nodejs framework."
          iconUrl="/icons/expressjs.png"
        />
        {/* Add more backend frameworks/libraries as needed */}
      </div>

      {/* Databases Section */}
        <h2 className="text-2xl font-semibold w-full mb-2">Databases</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mb-6 gap-4">
        <TechSkillCard
          skillName="MongoDB"
          skillDescription="NoSQL document database"
          iconUrl="/icons/MongoDB.png"
        />
        <TechSkillCard
          skillName="MySQL"
          skillDescription="Relational database management system"
          iconUrl="/icons/mySQL.png"
        />
        <TechSkillCard
          skillName="PostgresSQL"
          skillDescription="Relational database management system"
          iconUrl="/icons/PostgresSQL.png"
        />
        <TechSkillCard
          skillName="Mongoose"
          skillDescription="A mongoDB ODM library."
          iconUrl="/icons/Mongoosejs.png"
        />
        <TechSkillCard
          skillName="Mongoose"
          skillDescription="A mongoDB ODM library."
          iconUrl="/icons/Mongoosejs.png"
        />
        <TechSkillCard
          skillName="Prisma"
          skillDescription="A nextjs ORM library."
          iconUrl="/icons/prisma.png"
        />
        {/* Add more databases as needed */}
      </div>

      {/* Other Tools Section */}
        <h2 className="text-2xl font-semibold w-full mb-2">Other Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mb-6 gap-4">
        <TechSkillCard
          skillName="Git"
          skillDescription="Version control system"
          iconUrl="/icons/Git.png"
        />
        <TechSkillCard
          skillName="Vercel"
          skillDescription="A deployment Platform for nextJS."
          iconUrl="/icons/Vercel.png"
        />
        {/* Add more tools as needed */}
      </div>
    </div>
  );
};

export default TechSkillsPage;
