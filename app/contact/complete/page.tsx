import Link from "next/link";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
export default function ContactCompletePage() {
  return (
    <>
        <Header/>
        <Main>
            <h1 className="text-3xl font-bold mb-4">送信完了</h1>
            <p className="text-center mb-8">
                お問い合わせありがとうございます。
                <br />
                内容を確認の上、担当者よりご連絡いたします。
            </p>
            <Link href="/" className="underline hover:opacity-70">
                トップへ戻る
            </Link>
        </Main>
    </>
  );
}