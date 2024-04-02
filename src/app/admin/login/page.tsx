"use client";
import { trpc } from "@/app/_trpc/trpcClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useTheme } from "@/lib/reduxSelectors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {

  useEffect(() => {
   if(localStorage.getItem('isAdmin'))
   router.push('/admin')
  }, [])

  const [error, setError] = useState('');

  const theme = useTheme();
  const router = useRouter()

  const { mutate, isPending } = trpc.adminLogin.useMutation({
    onSuccess({ success, authtoken}){
        localStorage.setItem('adminToken', authtoken)
        localStorage.setItem('isAdmin', 'true' )
        router.push('/admin')
    },
    onError(error){
      if(error.data?.code === "UNAUTHORIZED"){
        setError('invalid user credentials, please enter correct credentials!')
      }else if(error.data?.code === "NOT_FOUND"){
        setError("user with this credentials does not exist!")
      }
    }
  });


  const handleAdmin = async (data: FormData) => {
    const username = data.get('username')?.valueOf() as string;
    const password = data.get('password')?.valueOf() as string;
    mutate({username: username , password: password});
    console.log('successful');
  }

  if(isPending){
    return(
      <MaxWidthWrapper className="min-h-screen flex flex-col items-center justify-center">
         <div className="flex flex-col space-y-1 items-center justify-center">
           <p className="text-lg font-semibold text-zinc-800">loading...</p>
           <span className="font-bold text-sm text-gray-700">cancel</span>
         </div>
      </MaxWidthWrapper>
    )
  }
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)]">
      <div
        className={`flex flex-col items-center justify-center px-6 py-8 shadow-md border boder-zinc-300 rounded-md ${
          theme === "light" ? "bg-white" : "bg-white/95"
        } z-10 space-y-2 min-h-[300px] min-w-[400px]`}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Admin Login
        </h2>
        <form action={handleAdmin} className="flex flex-col items-center w-full space-y-4">
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-gray-700 font-medium">email</label>
            <input
              type="text"
              name="username"
              id="username"
              className="py-1 px-4 rounded-md outline-none shadow-sm border border-zinc-300 text-zinc-900 text-[16px] leading-6 focus-visible:outline focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-gray-700 font-medium">
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="py-1 px-4 rounded-md outline-none shadow-sm border border-zinc-300 text-zinc-900 text-[16px] leading-6 focus-visible:outline focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            />
          </div>
          <div className="text-sm text-center text-gray-600 flex items-center cursor-default">
            forgot password?
            <Link
              href="/admin/forgotpassword"
              className="font-semibold cursor-pointer text-gray-800 pl-[2px]"
            >
              {" "}
              get new!
            </Link>
          </div>
          <button
            className="mx-auto py-1 px-4 bg-blue-500 shadow-md rounded-md text-white mt-2"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm font-medium text-zinc-700">{error}</p>
        </form>
        <p className="text-zinc-600 pt-2">
          Partner with us! <b className="cursor-pointer">click here</b>
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
