"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Data = {
  email: string;
  password: string;
};

export type Result = {
  success: boolean;
  message: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [result, setResult] = useState<Result>();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Data>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onFormSubmit(data: Data) {
    try {
      // toast.promise()
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      const json = await response.json();
      // console.log({json})
      if (json?.success) router.push("/");
      setResult(json);
    } catch (error: any) {
      console.log("Login failed", error);
      toast.error(error.message);
    }
  }
  return (
    <div className="w-full h-fit grid place-items-center">
      <h1 className="text-2xl font-bold">Welcome to Login</h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="mt-10 w-full max-w-[550px] flex flex-col gap-y-6"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            className="bg-neutral-300 rounded-md focus:outline focus:outline-offset-2 focus:outline-blue-500 px-4 py-2 caret-blue-800 text-blue-700 w-full"
            placeholder="Email"
            autoFocus
            {...register("email", {
              required: "Email cannot be empty.",
            })}
          />
          {errors?.email ? (
            <p className="text-red-500 text-xs">{errors?.email?.message}</p>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <input
            type="text"
            className="bg-neutral-300 rounded-md focus:outline focus:outline-offset-2 focus:outline-blue-500 px-4 py-2 caret-blue-800 text-blue-700 w-full"
            placeholder="Password"
            autoFocus
            {...register("password", {
              required: "Password cannot be empty.",
            })}
          />
          {errors?.password ? (
            <p className="text-red-500 text-xs">{errors?.password?.message}</p>
          ) : (
            ""
          )}
        </div>
        {isSubmitting ? "Loading..." : ""}

        {errors?.root?.message ? (
          <p className="text-red-500">{errors?.root?.message}</p>
        ) : (
          ""
        )}

        {!result?.success ? (
          <p className="text-red-500">{result?.message}</p>
        ) : (
          ""
        )}

        <div className="flex flex-col gap-y-2 w-full">
          <button className="bg-blue-500 w-40 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors ease-in-out duration-200">
            Login
          </button>
          <span className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className="text-blue-500 hover:underline">
              Create new account
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
