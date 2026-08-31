export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "name" | "required" | "maxLength"
> & {
  id          : string  ;
  name        : string  ;
  rows       ?: number  ;
  isRequired ?: boolean ;
  maxLength  ?: number  ;
};