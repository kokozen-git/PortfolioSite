import type { ConfirmListProps } from "@/types/ui/ConfirmListProps";
import ConfirmField from "@/components/atoms/ConfirmField/ConfirmField";

export default function ConfirmList({
  fields,
}: ConfirmListProps) {
  return (
    <dl className="mb-8 space-y-4">
      {fields.map((field) => (
        <ConfirmField
          key={field.label}
          label={field.label}
          value={field.value}
        />
      ))}
    </dl>
  );
}