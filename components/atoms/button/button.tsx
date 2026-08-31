// components/ui/Button.tsx
type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline";
  fullWidth?: boolean; // 追加：flex-1が必要な時だけtrueにする
};

const variantStyles = {
  primary: "bg-[#014555] text-white hover:opacity-80",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
};

export default function Button({
  type = "button",
  text,
  onClick,
  disabled = false,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? "flex-1" : ""} px-8 py-3 rounded-full font-bold transition-colors disabled:opacity-50 ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
}