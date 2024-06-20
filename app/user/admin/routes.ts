import { dbconfig } from "@/app/utils/dbconfig";
import usermodel from "@/app/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await dbconfig();
    const { email, password, name } = await req.json();

    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(password, salt);

    const users = await usermodel.create({
      email,
      password: hashed,
      name,
      role: "admin",
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
