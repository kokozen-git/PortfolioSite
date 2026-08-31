"use client";
import { useState } from "react";
import Link from "next/link";

import type { TouchLinkProps } from '@/types/ui/link';

export default function TouchLink({ 
  href                     ,
  className           = "" ,
  touchActiveClass    = "" ,
  touchInactiveClass  = "" ,
  children                 ,
  ...props
}: TouchLinkProps) {

  //リンクがタッチされているかを管理
  const [isTouched, setIsTouched] = useState(false);

  //タッチ状態に応じて適用するクラスを切り替える
  const touchClass = isTouched ? 
    touchActiveClass   : 
    touchInactiveClass ;

  return (
    <Link
      {...props}
      href = { href} 

      //タッチ操作
      onTouchStart = { () => setIsTouched(true)  } //開始時にアクティブ状態にする
      onTouchEnd   = { () => setIsTouched(false) } //終了時に通常状態へ戻す
      onTouchCancel= { () => setIsTouched(false) } //キャンセル時も通常状態へ戻す

      //共通クラス + タッチ状態に応じたクラスを適用
      className = {`${className} ${touchClass} `}
    >
      {children}
    </Link>
  );
}
