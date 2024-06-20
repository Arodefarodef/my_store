import myUserModel from "@/app/utils/model/usermodel";
import { dbconfig } from "@/app/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import myProductModel from "@/app/utils/model/productmodel";

export const POST = async (params: any, req: NextRequest) => {
  try {
    await dbconfig();

    const { title, price, description, image, quantity }: any =
      await req.json();

    const { userID } = await params.params;
    const users = await myProductModel.create({});
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
