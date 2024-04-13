import React from "react";
import { Input } from "./ui/input";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const InputTag = ({ setTitle }: Props) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  return (
    <div className="mb-5 space-y-2">
      <label
        htmlFor="blog-input"
        className="text-[16px] leading-6 text-gray-900 px-2 font-medium"
      >
        Enter your blog post name
      </label>
      <Input
        type="text"
        id="blog-input"
        placeholder="Type something..."
        className="max-w-sm"
        onChange={handleChange}
      />
    </div>
  );
};

export default React.memo(InputTag);
