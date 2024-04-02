
import { publicProcedure } from "../trpc";
import {z} from 'zod';
import { TRPCError } from "@trpc/server";
import bcrypt from 'bcryptjs';
import { db } from "@/database";
import jwt from 'jsonwebtoken';

export const createAdmin = publicProcedure.input(z.object({
    username: z.string(),
    password: z.string()
})).mutation(async ({input}) => {
    const {username, password} = input;

    const isUser = await db.admin.findFirst({
        where: {
            username: username
        }
    })

    if(isUser){
        throw new TRPCError({code: "BAD_REQUEST"});
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await db.admin.create({
        data: {
            username, password: hashedPassword
        }
    })
    
    const data = {
        user: {
           id: user.id
        }
    }

    const authtoken = jwt.sign(data, process.env.JWT_SECRET!) as string;

    return {success: true, authtoken};
});

export const adminLogin = publicProcedure.input(z.object({
    username: z.string(),
    password: z.string()
})).mutation(async ({ input }) => {
    const { username, password } = input;
    
    const user = await db.admin.findFirst({
        where: {
            username: username
        }
    })

    if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password); // Fix the typo here

    if (!isPasswordCorrect) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    const data = {
        user: {
            id: user.id
        }
    };

    const authtoken = jwt.sign(data, process.env.JWT_SECRET!)
    return { success: true, authtoken }
})
