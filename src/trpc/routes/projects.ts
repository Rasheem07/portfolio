import { z } from "zod";
import { publicProcedure } from "../trpc";
import { db } from "@/database";
import { TRPCError } from "@trpc/server";

export const addProject = publicProcedure.input(z.object({
    title: z.string(),
    description: z.string(),
    imageURL: z.string(),
    codeURL: z.string(),
})).mutation(async ({input}) => {
  const {title, description, imageURL, codeURL} = input;

  const isAlreadyExist = await db.project.findFirst({
    where: {
      title: title
    }
  })

  if(isAlreadyExist){
    throw new TRPCError({code: 'BAD_REQUEST'})
  }

  await db.project.create({
    data: {
      title, description, imageURL, codeURL
    }
  })

  return { success: true }

})
