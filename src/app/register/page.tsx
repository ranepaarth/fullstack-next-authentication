"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
type Data = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Data>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onFormSubmit(data: Data) {
    try {
      console.log(data);
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      if (result.username) {
        // router.push('/login')
        toast.success("User created successfully");
      }
      console.log(result);
      reset();
    } catch (error: any) {
      toast.error(error?.message);
      console.log("Register failed", error.message);
    }
  }

  return (
    <div className="w-full h-fit grid place-items-center">
      <h1 className="text-2xl font-bold">Create your account</h1>
      {isSubmitting ? "Loading..." : ""}

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="mt-4 w-full max-w-[550px] flex flex-col gap-y-6"
      >
        <div className="flex flex-col gap-1">
          {isSubmitSuccessful ? (
            <p className="my-2 text-sm place-self-start">
              Account created successfully <Link href={"/login"} className="text-base py-1 px-2 font-semibold bg-blue-500  rounded-md hover:bg-blue-600">Login</Link>
            </p>
          ) : (
            ""
          )}
          <input
            type="text"
            className="bg-neutral-300 rounded-md focus:outline focus:outline-offset-2 focus:outline-blue-500 px-4 py-2 caret-blue-800 text-blue-700 w-full"
            placeholder="Name"
            autoFocus
            {...register("username", {
              required: "Name cannot be empty.",
            })}
          />
          {errors?.username ? (
            <p className="text-red-500 text-xs">{errors?.username?.message}</p>
          ) : (
            ""
          )}
        </div>
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
            type="password"
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

        {errors?.root?.message ? (
          <p className="text-red-500">{errors?.root?.message}</p>
        ) : (
          ""
        )}

        <div className="flex flex-col gap-y-2 w-full">
          <button className="bg-blue-500 w-40 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors ease-in-out duration-200">
            Register
          </button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-500 hover:underline">
              Login to continue
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
