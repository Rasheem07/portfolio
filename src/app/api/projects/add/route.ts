import { db } from "@/database";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const {title, description, imageURL, codeURL} = await req.json();

  const isAlreadyExist = await db.project.findFirst({
    where: {
      title: title
    }
  })

  if(isAlreadyExist){
    throw new Error('project already exists')
  }

  await db.project.create({
    data: {
      title, description, imageURL, codeURL
    }
  })

  return { success: true }

}