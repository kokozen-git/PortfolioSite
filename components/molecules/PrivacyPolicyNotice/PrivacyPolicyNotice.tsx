import { pagePath } from '@/constants/pagePath';

import TouchLink from '@/components/atoms/TouchLink/TouchLink';
import Text from '@/components/atoms/Text/Text';

export default function PrivacyPolicyNotice() {

  const href = pagePath.policy.href;

  return (
    <Text
      className='mb-12'
    >
      送信情報の取り扱いについては <br className='md:hidden' />
      <TouchLink 
        href      = {href}
        className = "underline underline-offset-2 transition-opacity hover:opacity-70" 
        touchActiveClass = "opacity-70"
      >
        プライバシーポリシー
      </TouchLink>
      をご確認ください。
    </Text>
  );
}