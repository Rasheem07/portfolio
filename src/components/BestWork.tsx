
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import { useTheme } from "@/lib/reduxSelectors";
import { cn } from "@/lib/utils";

type Props = {
    className?: string,
    imgURL: string,
    title: string,
    description: string[250],
    stack: string
};


export default function BestWork({className, imgURL, title, description, stack}: Props) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentuseTheme = useTheme();

  return (
    <div className={cn(className ,`flex flex-row ${currentuseTheme === "light" ? 'bg-white' : 'bg-white/95'} shadow-md hover:shadow-lg rounded-md min-h-64 min-w-64 px-6 py-4 gap-4 h-full`)}>
      <div className="flex flex-col items-center justify-between px-2 h-full gap-6">
        <div className="flex flex-row h-full justify-between gap-6 pt-2.5">
          <Dialog
            open={isOpen}
            onOpenChange={(v) => {
              if (!v) {
                setIsOpen(v);
              }
            }}
          >
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
              <Image
                src={imgURL}
                alt="sample image"
                width={250}
                height={200}
              />
            </DialogTrigger>
            <DialogContent className="max-w-6xl w-full">
              <Image
                src={imgURL}
                alt="sample image"
                width={1000}
                height={466}
                className="mx-auto"
              />
            </DialogContent>
          </Dialog>
          <h3 className="text-xl font-semibold text-gray-800 pt-2">
            {title}
          </h3>
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <p className="text-[16px] leading-6 font-medium text-zinc-700">
            <span className="font-semibold text-blue-500">Description: </span>
            {description}
          </p>
          <p className="text-sm font-medium text-gray-600">
            <span className="font-semibold underline underline-offset-2">
              Tech stack:
            </span>{" "}
            {stack}
          </p>
        </div>
      </div>
    </div>
  );
}
