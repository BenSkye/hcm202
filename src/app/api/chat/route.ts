import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Kiểm tra dữ liệu đầu vào
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { message: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Bạn là chuyên gia về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh." },
        { role: "user", content: message },
      ],
    });

    const aiMessage = response.choices[0].message.content;
    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Xin lỗi, tôi gặp lỗi. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
