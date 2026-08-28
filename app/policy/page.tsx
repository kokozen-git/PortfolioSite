import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { H1 ,H2 } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <section
          className="bg-gray-200 w-2xl m-auto min-h-screen px-6 py-16"
        >
          <H1 className="text-black text-center">
            プライバシーポリシー
          </H1>
          <div className="pt-5">
            <H2>【取得する情報】</H2>
            <Text>
              お問い合わせフォームでは、以下の情報を取得します。<br/>
              ・お名前 <br/>
              ・メールアドレス <br/>
              ・お問い合わせ内容
            </Text>
          </div>
          <div className="pt-5">
            <H2>【利用目的】</H2>
            <Text>
              取得した情報は、お問い合わせへの回答・対応のためにのみ利用します。
              上記目的以外での利用は行いません。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【第三者提供について】</H2>
            <Text>
              取得した情報を、法令に基づく場合を除き、<br/>
              本人の同意なく第三者に提供することはありません。<br/>
              なお、メール送信には外部サービス（Resend）を利用しており、<br/>
              送信処理の過程で当該サービスの提供事業者にデータが渡ります。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【情報の保管期間】</H2>
            <Text>
              お問い合わせへの対応完了後、必要な期間を超えて情報を保管しません。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【著作権について】</H2>
            <Text>
              当サイトに掲載されている文章・画像・コード等の著作権は、<br/>
              特に明記のない限りcocozen-museumに帰属します。<br/>
              無断での転載・複製・再配布はご遠慮ください。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【免責事項】</H2>
            <Text>
              当サイトの情報は正確性に努めていますが、<br/>
              内容を保証するものではありません。<br/>
              当サイトに掲載された内容によって生じた損害等の、<br/>
              一切の責任を負いかねますのでご了承ください。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【リンクについて】</H2>
            <Text>
              当サイトへのリンクは自由に行っていただいて構いません。<br/>
              事前の許可や連絡は不要です、<br/>
              ただし、当サイト内の画像への直接リンク（ホットリンク）、<br/>
              およびiframe等で埋め込み表示することは禁止します。
            </Text>
          </div>
          <div className="pt-5">
            <H2>【お問い合わせ】</H2>
            <Text>
              本ポリシーに関するお問い合わせは、<br/>
              当サイトのお問い合わせフォームよりご連絡ください。
            </Text>
          </div>
        </section>
    
      </Main>
    </>
  );
}
