import { useEffect } from "react";
import { H2 } from "@/components/ui/heading";
import ConfirmText from "@/components/ui/confirmText";
import Button from "@/components/ui/button";
type ConfirmModalProps = {
  values: {
    name: string;
    email: string;
    message: string;
  };
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
};

export default function ConfirmModal({
  values,
  onCancel,
  onSubmit,
  isSubmitting = false,
}: ConfirmModalProps) {
  
  //モーダルの開閉
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""; 
    };
  }, []);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl">
        <H2>送信内容の確認</H2>
        <dl className="space-y-4 mb-8">
          <ConfirmText
            label="お名前"
            value={values.name}
          />
          <ConfirmText
            label="メールアドレス"
            value={values.email}
          />
          <ConfirmText
            label="本文"
            value={values.message}
          />
        </dl>

        <div className="flex gap-4">
          <Button
            type="button" 
            text="修正する" 
            variant="outline" 
            onClick={onCancel} 
            disabled={isSubmitting} 
            fullWidth 
          />
          <Button 
            type="button" 
            text={isSubmitting ? "送信中..." : "送信する"} 
            onClick={onSubmit} 
            disabled={isSubmitting} 
            fullWidth 
          />
        </div>
      </div>
    </div>
  );
}