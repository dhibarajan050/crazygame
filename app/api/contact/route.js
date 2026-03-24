import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/MongoDb";
import { MessageModel } from "@/app/models/message.model";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newMessage = await MessageModel.create({ name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Message Error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}




