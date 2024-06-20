import { dbConfig } from "@/app/utils/dbconfig";
// import myUserModel from "@/app/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import myProductModel from "@/app/utils/model/productmodel";

export const GET = async () => {
  try {
    await dbConfig();

    const users = await myProductModel.find();
    return NextResponse.json({
      status: 200,
      message: "reading all Product",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { Title, price, image, description, quantity } = await req.json();

    const users = await myProductModel.create({
      Title,
      price,
      image,
      description,
      quantity,
    });

    return NextResponse.json({
      status: 200,
      message: "creating all User",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
