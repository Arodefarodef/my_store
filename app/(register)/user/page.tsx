import Button from "@/app/reuse/button";
import Input from "@/app/reuse/input";
import React from "react";
import { MdEmail, MdLockClock, MdPerson } from "react-icons/md";

const page = async () => {
  const registerUser = async (formData: FormData) => {
    "use server";
    const URL: string = "https://your-store-iota.vercel.app/api/user";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form action={registerUser}>
          <Input
            title="Enter your Name"
            place="Enter your Name"
            icon={<MdPerson />}
            name="name"
          />
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
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
