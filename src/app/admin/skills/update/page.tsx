'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { trpc } from "@/app/_trpc/trpcClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const { mutate } = trpc.addSkill.useMutation({});

  const handleSkillUpload = (data: FormData) => {
    const skill = data.get("skill")?.valueOf() as string;
    const description = data.get("description")?.valueOf() as string;
    const iconURL = data.get("iconURL")?.valueOf() as string;

    mutate({ skill, description, iconURL });

    console.log("successfully skill uploaded");
  };
  return (
    <MaxWidthWrapper className="min-h-[calc(100vh-56px)] flex flex-col justify-center items-center ">
      <form action={handleSkillUpload} className="flex flex-col gap-6 max-w-md w-full relative">
        <h2 className="text-2xl font-semibold text-zinc-700">Add your new skill here...</h2>
        <Input name="skill" placeholder="enter the skill name..." />
        <Input name="description" placeholder="enter the description..." />
        <Input name="iconURL" placeholder="enter the iconURL..." />
        <Button type="submit" className="max-w-min absolute right-2 top-full mt-5">submit</Button>
      </form>
    </MaxWidthWrapper>
  );
}
