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
        <>
            <label 
                htmlFor={htmlFor}
                className="mb-2 flex gap-x-2 items-center text-sm font-bold"
            >
                {text}
                {isRequired && (
                    <span className="rounded bg-[#014555] px-1.5 py-0.5 text-xs font-normal text-white align-middle">
                    必須
                    </span>
                )}
            </label>
        
        </>
    );
}
