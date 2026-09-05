'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

import TextInput from "@/components/atoms/TextInput/TextInput";
import TextArea from "@/components/atoms/TextArea/TextArea";
import FormField from "@/components/molecules/FormField/FormField";
import ConfirmModal from "@/components/organisms/ConfirmModal/confirmModal";
import Button from "@/components/atoms/Button/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type Field = {
  id: string;
  name: keyof FormValues;
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  maxLength?: number;
  component: typeof TextInput | typeof TextArea;
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
    if (!values.message) newErrors.message = "本文を入力してください";

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

  const fields: Field[] = [
    {
      id: "name",
      name: "name",
      label: "お名�?",
      component: TextInput,
      placeholder: "米�? 巧",
    },
    {
      id: "email",
      name: "email",
      label: "メールアドレス",
      component: TextInput,
      type: "email",
      placeholder: "hoge@example.com",
    },
    {
      id: "message",
      name: "message",
      label: "本�?",
      component: TextArea,
      placeholder: "お問�?合わせ�??容",
      maxLength: 2048,
    },
  ];

  return (
    <>
      <form onSubmit={handleConfirm}>
        <div className="space-y-6">
          {fields.map((field) => {
            const FieldComponent = field.component;
            return (
              <FormField
                key={field.id}
                htmlFor={field.id}
                label={field.label}
                isRequired
                error={errors[field.name]}
              >
                <FieldComponent
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                />
              </FormField>
            );
          })}
          
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