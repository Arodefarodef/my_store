"use client";

import React from "react";
import Button from "./reuse/button";
import { MdPeople } from "react-icons/md";
import Input from "./reuse/input";
import { getServerSession } from "next-auth";
import { options } from "./api/auth[...nextauth]/options";
import { useSession } from "next-auth/react";

const page = () => {
  // const session = await getServerSession(options);

  const session = useSession();
  console.log("reading session: ", session);

  return (
    <div>
      <Button icon={<MdPeople />} className="bg-green-500">
        Click here
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Button something="warning">Me</Button>

      <br />
      <br />
      <br />
      <br />

      <Button something="danger" size="xs" className="bg-red-300 ">
        Me
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Input
        icon={<MdPeople />}
        title="Enter your Name"
        place="Name"
        className="border-red-500"
      />
    </div>
  );
};

export default page;
