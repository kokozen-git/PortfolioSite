type ErrorTextProps = {
  message?: string;
};

export default function ErrorText({
  message,
}: ErrorTextProps) {

  return (
    <p className="text-red-600 text-sm mt-1 font-bold">{message}</p>
  );
}