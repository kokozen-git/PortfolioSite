type TextAreaProps = {
  id: string;
  name: string;
  rows?:number;
  isRequired?: boolean;
  placeholder?: string;
  maxLength?: number;
};

export default function TextArea({
  id,
  name,
  rows = 6,
  isRequired = false,
  placeholder,
  maxLength = 2048,
}: TextAreaProps) {

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      required={isRequired}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#014555] transition-colors"
    />
  );
}
