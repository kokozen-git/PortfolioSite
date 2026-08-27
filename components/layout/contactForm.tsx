'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textarea";
import ErrorText from "@/components/ui/errorText";
import Button from "@/components/ui/button";
import ConfirmModal from "./confirmModal";
type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleConfirm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: FormValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const newErrors: Partial<FormValues> = {};
    if (!values.name) newErrors.name = "お名前を入力してください";
    if (!values.email) newErrors.email = "メールアドレス形式で入力してください";
    if (!values.message) newErrors.message = "本文を入力してください";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormValues(values);
    setIsModalOpen(true); // ここでモーダルを開く
  }

  async function handleSubmit() {
    if (!formValues) return;
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    setIsSubmitting(false);

    if (res.ok) {
      router.push("/contact/complete"); // ← 送信成功時に遷移
    } else {
      // 失敗時の処理(エラーメッセージ表示等)、必要なら後で追加
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleConfirm}>
        <div>
          <Label 
            htmlFor="name"
            text="お名前"
          />
          <Input 
            id="name"
            name="name"
            type="text"
            isRequired={true}
            placeholder="米倉 巧"
          />
          <ErrorText
            message={errors.name}
          />
        </div>
        
        <div>
          <Label 
            htmlFor="email"
            text="メールアドレス"
          />
          <Input 
            id="email"
            name="email"
            type="email"
            isRequired={true}
            placeholder="hoge@examle.com"
          />
          <ErrorText
            message={errors.email}
          />
        </div>
        
        <div>
          <Label 
            htmlFor="message"
            text="本文"
          />
          <TextArea 
            id="message"
            name="message"
            isRequired={true}
            placeholder="お問い合わせ内容"
            maxLength={4096}
          />
          <ErrorText
            message={errors.message}
          />
        </div>
        <Button type="submit" text="確認" />
      </form>

      {isModalOpen && formValues && (
        <ConfirmModal
          values={formValues}
          onCancel={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}