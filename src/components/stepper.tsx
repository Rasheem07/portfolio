import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type Props = {
    className: string
};

export default function Stepper({className}: Props) {
  const [maxSize, setMaxSize] = useState(56);
  const [currentSize, setCurrentSize] = useState(12);

  const searchValidator = z.object({
    Size: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= maxSize!),
  });

  type searchValidatorType = z.infer<typeof searchValidator>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<searchValidatorType>({
    defaultValues: {
      Size: "12",
    },
    resolver: zodResolver(searchValidator),
  });

  const searchSubmit = ({ Size }: searchValidatorType) => {
    setCurrentSize(Number(Size) - 1);
    setValue("Size", String(Size));
  };

  return (
    <div className={cn(className, "flex items-center gap-0.5")}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="page previous"
        disabled={currentSize === 11}
        onClick={() => {
          setCurrentSize((prev) => (prev - 1 >= 0 ? prev - 1 : 1));
          setValue("Size", String(currentSize - 1));
        }}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-1.5">
        <Input
          {...register("Size")}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSubmit(searchSubmit)();
            }
          }}
          className={cn(
            "w-12 h-8",
            errors.Size && "focus-visible:ring-red-500"
          )}
        />
        <p className="text-zinc-700 text-sm space-x-1">
          <span>/</span>
          <span>{!maxSize ? "x" : maxSize!}</span>
        </p>
      </div>

      <Button
        size="icon"
        variant="ghost"
        aria-label="page next"
        disabled={currentSize === maxSize!}
        onClick={() => {
          setCurrentSize((prev) =>
            prev + 1 === maxSize! ? maxSize! : prev + 1
          );
          setValue("Size", String(currentSize + 1));
        }}
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
    </div>
  );
}
