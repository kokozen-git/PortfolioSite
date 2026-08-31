import type { InputHTMLAttributes } from "react";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "type" | "required" | "maxLength"
> & {
  id          : string    ;
  name        : string    ;
  type       ?: InputType ;
  isRequired ?: boolean   ;
  maxLength  ?: number    ;
};