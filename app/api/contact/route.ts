// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // 実験段階はResendのテスト用送信元でOK
      to: "nkgeek.main@gmail.com",
      subject: `【お問い合わせ】${name}様より`,
      text: `お名前: ${name}\nメール: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}