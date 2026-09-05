import Container from "@/components/ui/container";

import { H1 ,H2 } from "@/components/atoms/Heading/Heading";
import Text        from "@/components/atoms/Text/Text";

export default function Home() {
  return (
    <>
        <Container>
          <H1 className="text-black text-center">
            プライバシーポリシー
          </H1>
          <div className="pt-5">
            <H2>【取得する情報�?</H2>
            <Text>
              お問�?合わせフォー�?では、以下�?��?報を取得します�?<br/>
              ・お名�? <br/>
              ・メールアドレス <br/>
              ・お問�?合わせ�??容
            </Text>
          </div>
          <div className="pt-5">
            <H2>【利用目�?�?</H2>
            <Text>
              取得した情報は、お問い合わせへの回答�?�対応�?�ためにのみ利用します�?
              上記目�?以外での利用は行いません�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【第三�?提供につ�?て�?</H2>
            <Text>
              取得した情報を、法令に基づく�?�合を除き�?<br/>
              本人の同意なく第三�?に提供することはありません�?<br/>
              なお、メール送信には外部サービス?�?Resend?��を利用しており�?<br/>
              送信処�?の過程で当該サービスの提供事業�?に�?ータが渡ります�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【情報の保管期間�?</H2>
            <Text>
              お問�?合わせへの対応完�?後、�?要な期間を�?えて�?報を保管しません�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【著作権につ�?て�?</H2>
            <Text>
              当サイトに掲載されて�?る文�?・画像�?�コード等�?�著作権は�?<br/>
              特に明記�?�な�?限りcocozen-museumに帰属します�?<br/>
              無断での転載�?��?製・再�?��?はご遠慮ください�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【�?�責事�??�?</H2>
            <Text>
              当サイト�?��?報は正確性に努めて�?ますが�?<br/>
              �?容を保証するも�?�ではありません�?<br/>
              当サイトに掲載された�?容によって生じた損害等�?��?<br/>
              一�?の責任を�?�?か�?�ます�?�でご�?承ください�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【リンクにつ�?て�?</H2>
            <Text>
              当サイトへのリンクは自由に行って�?ただ�?て構いません�?<br/>
              事前の許可�?連絡は不要です�?<br/>
              ただし、当サイト�??の画像への直接リンク?���?�ットリンク?���?<br/>
              およびiframe等で埋め込み表示することは禁止します�?
            </Text>
          </div>
          <div className="pt-5">
            <H2>【お問い合わせ�?</H2>
            <Text>
              本ポリシーに関するお問�?合わせ�?��?<br/>
              当サイト�?�お問�?合わせフォー�?よりご連絡ください�?
            </Text>
          </div>
        </Container>
    </>
  );
}
