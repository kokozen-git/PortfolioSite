import { useEffect } from "react";

import { H2 }      from "@/components/atoms/Heading/Heading";
import ConfirmList from "@/components/molecules/ConfirmList/ConfirmList";
import Button      from "@/components/atoms/Button/button";


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

  const fields = [
    {
      label: "お名?��?",
      value: values.name,
    },
    {
      label: "メールアドレス",
      value: values.email,
    },
    {
      label: "本?��?",
      value: values.message,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl">
        <H2 className="py-2 md:py-4">送信?��?容の確?��?</H2>
        <ConfirmList fields={fields}/>

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