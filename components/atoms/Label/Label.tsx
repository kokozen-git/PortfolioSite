type LabelProps = {
  htmlFor: string;
  text: string;
  isRequired?: boolean;
};

export default function Label({
  htmlFor,
  text,
  isRequired
}: LabelProps) {

  return (
    <label 
      htmlFor={htmlFor}
      className="mb-2 flex items-center gap-x-2 text-sm font-bold"
    >
      {text}
      {isRequired && (
        <span 
          className="rounded bg-(--mainColor-dark) px-1.5 py-0.5 text-xs font-normal text-white"
        >
        必須
        </span>
      )}
    </label>
  );
}
