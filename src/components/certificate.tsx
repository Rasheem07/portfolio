import React, { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { TracingBeam } from "@/components/ui/tracingBeam";
import { DialogContent } from "@radix-ui/react-dialog";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

type Props = {
    imgURL: string
};

export default function Certificate({imgURL}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
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
          alt="frontend"
          width={300}
          height={250}
          className="object-contain aspect-square rounded-sm"
        />
      </DialogTrigger>

      <DialogContent>
        <Image
          src={imgURL}
          alt="frontend"
          width={1200}
          height={600}
        />
      </DialogContent>
    </Dialog>
  );
}
