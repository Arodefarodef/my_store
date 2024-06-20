import myUserModel from "@/app/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";
import { dbconfig } from "@/app/utils/dbconfig";
import bcryptjs from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await dbconfig();
    const { email, password } = await req.json();

    const user = await myUserModel.findOne({ email });

    if (user) {
      const check = await bcryptjs.compare(password, user.password);
      if (check) {
        return NextResponse.json({
          status: 200,
          message: "user",
          data: user,
        });
      } else {
        return NextResponse.json({
          status: 404,
          message: "password not found",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        message: "email not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: error,
    });
  }
};
