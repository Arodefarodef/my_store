import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "@/app/utils/dbconfig";
import myUserModel from "../../utils/model/usermodel";
import bcryptjs from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password, name } = await req.json();

    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(password, salt);

    const users = await myUserModel.create({
      email,
      password: hashed,
      name,
      role: "user",
    });

    return NextResponse.json({
      satus: 200,
      message: "create user",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: error,
    });
  }
};

export const GET = async () => {
  try {
    await dbConfig();
    console.log("bad");
    const users = await myUserModel.find();
    return NextResponse.json({
      status: 200,
      message: "done",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: "error",
    });
  }
};
