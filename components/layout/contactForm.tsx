'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/atoms/Button/button";
import ConfirmModal from "../organisms/ConfirmModal/confirmModal";
import TextInput from "@/components/atoms/TextInput/TextInput";
import TextArea from "@/components/atoms/TextArea/TextArea";
import FormField from "@/components/molecules/FormField/FormField";

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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    if (!values.message) newErrors.message = "本�?を�?�力してください";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormValues(values);
    setSubmitError(null);
    setIsModalOpen(true);
  }

  async function handleSubmit() {
    if (!formValues) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/contact/complete");
        return;
      }

      setSubmitError(data.error ?? "送信に失敗しました。時間をおいて再度お試しく�?さい�?");
    } catch {
      setSubmitError("通信エラーが発生しました。ネ�?トワーク環�?をご確認く�?さい�?");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleConfirm}>
        <div className="space-y-6">
          <FormField
            htmlFor="name"
            label="お名�?"
            isRequired
            error={errors.name}
          >
            <TextInput
              id="name"
              name="name"
              placeholder="米�? 巧"
            />
          </FormField>

          <FormField
            htmlFor="email"
            label="メールアドレス"
            isRequired
            error={errors.email}
          >
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="hoge@example.com"
            />
          </FormField>

          <FormField
            htmlFor="message"
            label="本�?"
            isRequired
            error={errors.message}
          >
            <TextArea
              id="message"
              name="message"
              placeholder="お問�?合わせ�??容"
              maxLength={4096}
            />
          </FormField>
          
          <div className="flex justify-center">
            <Button type="submit" text="確�?" />
          </div>
        </div>
      </form>

      {isModalOpen && formValues && (
        <ConfirmModal
          values={formValues}
          onCancel={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </>
  );
}