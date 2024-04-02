import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <MaxWidthWrapper className="min-h-[100vh] flex flex-col justify-center items-center">
        <SignIn />
    </MaxWidthWrapper>
  );
}
