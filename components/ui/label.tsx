type LabelProps = {
  htmlFor: string;
  text: string;
};

export default function Label({
  htmlFor,
  text
}: LabelProps) {

    return (
        <label 
            htmlFor={htmlFor}
            className="block text-sm font-bold mb-2"
        >
            {text}
        </label>
    );
}
