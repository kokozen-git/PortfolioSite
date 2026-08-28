// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, error: "リクエストの形式が不正です" },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { success: false, error: "必須項目が入力されていません" },
      { status: 400 }
    );
  }

  if (name.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { success: false, error: "お名前が長すぎます" },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { success: false, error: "本文が長すぎます" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { success: false, error: "メールアドレスの形式が不正です" },
      { status: 400 }
    );
  }

  // 改行を含む値がヘッダ的な扱いに紛れ込まないよう無害化
  const safeName = name.replace(/[\r\n]/g, "");

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nkgeek.main@gmail.com",
      subject: `【お問い合わせ】${safeName}様より`,
      text: `お名前: ${safeName}\nメール: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}