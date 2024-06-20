"use client";

import Button from "@/app/reuse/button";
import Input from "@/app/reuse/input";
import { signIn } from "next-auth/react";
import React from "react";
import { MdEmail, MdLockClock, MdPerson } from "react-icons/md";

const page = async () => {
  const registerUser = async (formData: FormData) => {
    // "use server";
    const URL: string = "https://your-store-iota.vercel.app/api/user";

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

    signIn("credentials", { email, password });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form action={registerUser}>
          <Input
            title="Enter your Email"
            place="Enter your Email"
            icon={<MdEmail />}
            name="email"
          />
          <Input
            title="Enter your Password"
            place="Enter your Password"
            icon={<MdLockClock />}
            name="password"
          />

          <Button
            something="warning"
            className="w-full flex items-center justify-center"
            type="submit"
          >
            Signin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
