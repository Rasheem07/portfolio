import { z } from "zod";
import { adminLogin, createAdmin } from "./routes/adminLogin";
import { getArticle, getArticles, postArticle } from "./routes/article";
import { addProject } from "./routes/projects";
import { publicProcedure, router } from "./trpc";
import { db } from "@/database";
import { TRPCError } from "@trpc/server";
import { addSkill } from "./routes/skill";

export const appRouter = router({
  createAdmin: createAdmin,
  adminLogin: adminLogin,
  postArticle: postArticle,
  getArticles: getArticles,
  getArticle: getArticle,
  addProject: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        imageURL: z.string(),
        codeURL: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { title, description, imageURL, codeURL } = opts.input;

      const isAlreadyExist = await db.project.findFirst({
        where: {
          title: title,
        },
      });

      if (isAlreadyExist) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      await db.project.create({
        data: {
          title,
          description,
          imageURL,
          codeURL,
        },
      });

      return { success: true };
    }),
    addSkill: addSkill
});

export type AppRouter = typeof appRouter;
