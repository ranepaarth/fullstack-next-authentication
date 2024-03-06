"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
type Data = {
  name:string,
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  });

  function onFormSubmit(data: Data) {
    console.log(data);
    reset();
    return data;
  }
  return (
    <div className="w-full h-fit grid place-items-center">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="mt-10 w-full max-w-[550px] flex flex-col gap-y-6"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            className="bg-neutral-300 rounded-md focus:outline focus:outline-offset-2 focus:outline-blue-500 px-4 py-2 caret-blue-800 text-blue-700 w-full"
            placeholder="Name"
            autoFocus
            {...register("name", {
              required: "Name cannot be empty.",
            })}
          />
          {errors?.name ? (
            <p className="text-red-500 text-xs">{errors?.name?.message}</p>
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
