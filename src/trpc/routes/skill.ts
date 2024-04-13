import { string, z } from "zod";
import { publicProcedure } from "../trpc";
import { db } from "@/database";
import { TRPCError } from "@trpc/server";

export const addSkill = publicProcedure.input(z.object({
    skill: z.string(),
    description: z.string(),
    iconURL: z.string()
})).mutation(async ({input}) => {
  const { skill, description, iconURL} = input;

  const isAlreadyExisting = await db.skill.findFirst({
    where: {
        skill: skill
    }
  }) 

  if(isAlreadyExisting) throw new TRPCError({code: "BAD_REQUEST"})

  await db.skill.create({
    data: {
        skill: skill,
        description: description,
        iconURL: iconURL
    }
  })

  return {success: true}
})