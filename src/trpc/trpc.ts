import { db } from "@/database";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;

interface AuthInput {
  id: string;
}

export const router = t.router;
export const publicProcedure = t.procedure;
