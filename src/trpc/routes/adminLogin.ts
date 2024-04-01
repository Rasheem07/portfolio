
import { publicProcedure } from "../trpc";
import {z} from 'zod';
import { TRPCError } from "@trpc/server";
import bcrypt from 'bcryptjs';
import { db } from "@/database";

export const createAdmin = publicProcedure.input(z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
})).mutation(async ({input}) => {
    const {name, email, password} = input;

    const isUser = await db.admin.findFirst({
        where: {
            email: email
        }
    })

    if(isUser){
        throw new TRPCError({code: "BAD_REQUEST"});
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await db.admin.create({
        data: {
            name, email, password: hashedPassword
        }
    })
    
    return {success: true};
})