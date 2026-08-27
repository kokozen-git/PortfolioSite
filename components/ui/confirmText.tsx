type ConfirmTextProps = {
  label:string,
  value?: string;
};

export default function ConfirmText({
  label,
  value,
}: ConfirmTextProps) {

  return (
    <div>
      <dt className="text-sm font-bold">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap break-words">{value}</dd>
    </div>
  );
}