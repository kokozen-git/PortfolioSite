import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative z-10 h-12 w-30 md:w-36">
        <Image
          src="/images/logo.svg"
          alt="cocozen-museum_logo"
          fill
          className="fit"
          priority
        />
      </div>
    </Link>
  );
}