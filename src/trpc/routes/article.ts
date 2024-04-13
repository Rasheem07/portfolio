import { string, z } from "zod";
import { publicProcedure } from "../trpc";
import { db } from "@/database";
import { TRPCError } from "@trpc/server";
import jwt from 'jsonwebtoken';

export const postArticle = publicProcedure.input(z.object({
    title: z.string(),
    content: z.string(),
    admin: z.string()
})).mutation(async ({ctx, input}) => {
  const {title, content, admin} = input;

  // const adminId = jwt.verify(admin, process.env.JWT_SECRET!) as string;

  await db.article.create({
    data: {
        title, content, adminId: admin
    }
  })


  return {success: true}
})

export const getArticles = publicProcedure.query(async () => {

  const articles = await db.article.findMany()

  if(!articles) return

  return {articles}
})

export const getArticle = publicProcedure.input(z.object({
  id: z.string()
})).query(async ({input}) => {

  const {id} = input;
  const article = await db.article.findFirst({
    where: {
      id: id
    }
  })

  if(!article) return

  return {article}
})