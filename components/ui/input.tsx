type InputProps = {
  id: string;
  name: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  maxLength?: number;
};

export default function Input({
  id,
  name,
  type="text",
  isRequired = false,
  placeholder,
  maxLength = 128,
}: InputProps) {

  return (
    <input
      id={id}
      name={name}
      type={type}
      required={isRequired}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#014555] transition-colors"
    />
  );
}
