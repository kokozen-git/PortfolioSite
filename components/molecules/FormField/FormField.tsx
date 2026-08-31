import type { FormFieldProps } from "@/types/ui/FormFiledProps";
import ErrorText from "@/components/atoms/ErrorText/ErrorText";
import Label from "@/components/atoms/Label/Label";

export default function FormField({
  htmlFor            ,
  label              ,
  isRequired = false ,
  error              ,
  children           ,
}: FormFieldProps) {
  return (
    <div>
      <Label
        htmlFor={htmlFor}
        text={label}
        isRequired={isRequired}
      />
      {children}
      {error && 
        <ErrorText>{error}</ErrorText>
      }
    </div>
  );
}