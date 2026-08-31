import type { ConfirmFieldProps } from "@/types/ui/ConfirmFieldProps";

export default function ConfirmField({
  label,
  value,
}: ConfirmFieldProps) {

  return (
    <div>
      <dt className="text-sm font-bold">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap break-words">{value}</dd>
    </div>
  );
}