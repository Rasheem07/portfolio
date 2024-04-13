'use client'

import { trpc } from "@/app/_trpc/trpcClient";

const page = () => {

  const {mutate} = trpc.addProject.useMutation({});
  const handleSubmit = async (formData: FormData) => {
    const title = formData.get('project-title')?.valueOf() as string;
    const description = formData.get('project-description')?.valueOf() as string;
    const imageURL = formData.get('project-imageURL')?.valueOf() as string;
    const codeURL = formData.get('project-codeURL')?.valueOf() as string;

   mutate({title,description, imageURL, codeURL})
   console.log("successfully projet uploaded!")
  };

  return (
    <form action={handleSubmit} className="max-w-md mx-auto mt-8">
      {/* Input fields for project details */}
      <input type="text" name="project-title" placeholder="Project Title" className="w-full border rounded-md px-4 py-2 mb-4" />
      <textarea name="project-description" placeholder="Project Description" className="w-full border rounded-md px-4 py-2 mb-4" rows={4} />
      <input type="text" name="project-imageURL" placeholder="Image URL" className="w-full border rounded-md px-4 py-2 mb-4" />
      <input type="text" name="project-codeURL" placeholder="Code URL" className="w-full border rounded-md px-4 py-2 mb-4" />

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
        Add Project
      </button>
    </form>
  );
};

export default page;
