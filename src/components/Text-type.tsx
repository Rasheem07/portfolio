import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onSelect: (value: string) => void;
};

export default function Text_type({onSelect}: Props) {
  return (
    <Select onValueChange={onSelect} defaultValue="Normal">
      <SelectTrigger className="w-auto px-3">
        <SelectValue placeholder="Normal" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Title">Title</SelectItem>
        <SelectItem value="Heading">Heading</SelectItem>
        <SelectItem value="Sub-Heading">Sub-Heading</SelectItem>
        <SelectItem value="Normal">Normal</SelectItem>
        <SelectItem value="Sans-Sarif">Sans-Sarif</SelectItem>
      </SelectContent>
    </Select>
  );
}
